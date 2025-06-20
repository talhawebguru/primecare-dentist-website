export default function Container({ children }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      {children}
    </div>
  );
}