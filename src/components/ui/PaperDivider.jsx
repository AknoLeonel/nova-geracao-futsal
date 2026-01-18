import React from 'react';

const PaperDivider = ({ position = 'bottom', color = '#f3f3f3' }) => {
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${
        position === 'top' ? '-top-1 rotate-180' : '-bottom-1'
      }`}
    >
      <svg 
        className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        {/* Path atualizado: Irregular e serrilhado para imitar rasgo real */}
        <path 
          d="M0,0V46.29c47,0,47,20,94,20s47-20,94-20,47,20,94,20,47-20,94-20,47,20,94,20,47-20,94-20,47,20,94,20,47-20,94-20,47,20,94,20,47-20,94-20,47,20,94,20,47-20,94-20V0Z" 
          fill={color} 
        />
      </svg>
    </div>
  );
};

export default PaperDivider;