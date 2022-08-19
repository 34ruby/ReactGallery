import { useState, useEffect } from "react";
import './App.css';
import HashLoader from "react-spinners/HashLoader";
import { useLocation } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [ location ])

  const [uploadImages, setImages] = useState([]);

  const [loading, setLoading] = useState(false)
  



  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [uploadImages])


  const importFile = (event) => {
    

    const uploadFiles = event.target.files;
    const filesArray = Array.from(uploadFiles);

    const imagesArray = filesArray.map((file) => {
      
      return URL.createObjectURL(file);
      
     })

     setImages(imagesArray)
  }

  return (
    <div>
      {
        loading ? 
          <HashLoader color={'#ff0000'} loading={loading} size={230} /> 
        :
        <div>

        <h3>현재 업로드 된 이미지 수 : {uploadImages.length} 개</h3> <hr/>
  
        <label htmlFor="image">
          이미지 추가
        </label>
        <br/>
        
        <input type="file" name="images" onChange={importFile} multiple accept="image/png, image/gif, image/jpg, image/jpeg" />
        <div className="images">
          {uploadImages && uploadImages.map((image,index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="350" />
                <button onClick={() => setImages(uploadImages.filter((e) => e !== image))}>삭제!</button>
                <p>{index+1}번 사진</p>
              </div>
            )
          })
        }
        </div>

      </div>     
      }

    </div>

  );
}

export default App;
