import React from 'react';

const Cube = () => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        position: 'relative',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transformStyle: 'preserve-3d',
          transform: 'rotateY(45deg) rotateX(45deg)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(100px)',
            backgroundColor: 'red',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(90deg) translateZ(100px)',
            backgroundColor: 'green',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(180deg) translateZ(100px)',
            backgroundColor: 'blue',
          }}
        />
      </div>
    </div>
  );
};

export default Cube;