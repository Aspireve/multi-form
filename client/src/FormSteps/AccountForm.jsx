import { FormWrapper } from "../components/FormWrapper"
import { useState } from "react";
import { storage } from '../config/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


export function AccountForm({
  profileLink,
  updateFields,
}) {

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    if (!file) return;
    console.log("Here")
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          updateFields({profileLink: downloadURL})
        });
      }
    );
  }

  return (
    <FormWrapper title="Account Creation">
      {/* <form onSubmit={handleSubmit}> */}
        <label>Profile Photo</label>
        <input type='file' onChange={(e) => handleSubmit(e)}/>
      {/* </form> */}
      {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        <img src={imgUrl} alt='uploaded file' height={200} />
      }
    </FormWrapper>
  )
}