import { useState } from "react";
import './App.css';

function App() {
  const [uploadImages, setImages] = useState([]);
  const importFile = (event) => {

    const uploadFiles = event.target.files;
    const filesArray = Array.from(uploadFiles);

    const imagesArray = filesArray.map((file) => {
      return URL.createObjectURL(file);
     })

     setImages(imagesArray)
  }

  return (
    <section>
      <h3>현재 업로드 된 이미지 수 : {uploadImages.length} 개</h3> <hr/>

      <label htmlFor="image">
        이미지 추가
      </label>
      <br/>

      <input type="file" name="images" onChange={importFile} multiple accept="image/png, image/gif, image/jpg" />
      <div className="images">
      {uploadImages && uploadImages.map((image,index) => {
        return (
          <div key={image} className="image">
            <img src={image} height="200" />
            <button onClick={() => setImages(uploadImages.filter((e) => e !== image))}>삭제!</button>
            <p>{index+1}번 사진</p>
          </div>
        )
      })}
      </div>
    </section>
  );
}

export default App;
