
import './App.css';

function App() {
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
  }

  return (
    <section>
      <label htmlFor="image">
        이미지 추가하기
      </label>
      <br/>
      <input type="file" name="'images" onChange={onSelectFile} multiple accept="image/png, image/gif, image/jpg" />
    </section>
  );
}

export default App;
