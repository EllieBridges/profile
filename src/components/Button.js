function Button({ children }) {
  return (
    <button className="p-2 bg-pink-200 rounded text-white text-2xl">
      {children}
    </button>
  );
}

export default Button;
