

const LampEffect = () => {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Lamp Body */}
      <div className="relative bg-gray-800 rounded-full w-24 h-24">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50"></div>
        {/* Inner Light */}
        <div className="absolute inset-4 bg-blue-300 rounded-full"></div>
      </div>
      
      {/* Base/Stand of the Lamp */}
      <div className="absolute bottom-0 w-8 h-16 bg-gray-700 rounded-b-xl"></div>
      
      {/* Reflection Highlight */}
      <div className="absolute top-4 left-6 w-4 h-4 bg-white opacity-30 rounded-full"></div>
    </div>
  );
};

export default LampEffect;
