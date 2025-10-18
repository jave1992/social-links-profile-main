export default function ({texto}) {
  return (
    <button
      type="button"
      className="bg-button w-[250px] rounded-lg p-2 cursor-pointer"
    >
      {texto}
    </button>
  );
}
