import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisiable, setModalIsVisable] = useState(false);

  function hideModalHandler() {
    setModalIsVisable(false);
  }

  function showModalHandler() {
    setModalIsVisable(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisiable}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
