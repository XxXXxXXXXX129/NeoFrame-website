import React from 'react';
import { motion } from 'framer-motion';

export const SkeletonLoader = ({ type = 'default' }) => {
  const baseClass = "animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-xl";
  
  const variants = {
    image: "w-full h-64",
    text: "h-4 w-3/4",
    title: "h-8 w-1/2",
    card: "h-48 w-full",
    avatar: "w-12 h-12 rounded-full"
  };

  return (
    <motion.div
      className={`${baseClass} ${variants[type] || variants.default}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-gray-600/10 to-transparent animate-shimmer"></div>
    </motion.div>
  );
};

export const ImageWithSkeleton = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <div className="relative">
      {isLoading && <SkeletonLoader type="image" />}
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
          <span className="text-gray-400">Fehler beim Laden des Bildes</span>
        </div>
      )}
    </div>
  );
}; 