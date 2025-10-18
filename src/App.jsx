import avatar from "./assets/images/avatar-jessica.jpeg";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="bg-gray-900 flex justify-center items-center h-screen">
        <div className="bg-gray-800 text-white rounded-lg p-8 grid place-items-center">
          <img
            src={avatar}
            alt="avatar"
            className="my-3 rounded-full size-20"
          />
          <p className="text-[18px]">Jessica Randall</p>
          <p className="text-[10px] text-yellow">London, United Kingdom</p>
          <p className="text-[10px] my-5">
            "Front-end developer and avid reader."
          </p>
          <div className="flex flex-col gap-3">
            <Button texto="GitHub" />
            <Button texto="Frontend Mentor" />
            <Button texto="LinkedIn" />
            <Button texto="Twitter" />
            <Button texto="Instagram" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
