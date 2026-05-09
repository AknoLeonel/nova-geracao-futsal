import React from 'react';

const PaperDivider = ({ position = 'bottom', color = '#f3f3f3' }) => {
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none ${
        // LÓGICA INVERTIDA: 
        // Agora o 'bottom' usa rotate-180 para que as pontas rasgadas apontem para CIMA.
        // O 'top' fica sem rotação para as pontas apontarem para BAIXO (se você usar no topo).
        position === 'bottom' ? '-bottom-1 rotate-180' : '-top-1'
      }`}
    >
      <svg 
        className="relative block w-[104%] -ml-[2%] h-[30px] md:h-[45px]" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        {/* Path mantido, mas agora renderizado de cabeça para baixo devido à div pai */}
        <path 
          d="M1200,0 H0 V40 L23,55 L50,32 L75,60 L96,40 L122,58 L140,30 L168,52 L190,25 L215,50 L238,35 L265,62 L290,40 L315,56 L330,28 L365,50 L385,33 L410,60 L435,45 L450,22 L485,55 L500,38 L530,65 L550,40 L575,58 L605,28 L625,50 L650,35 L670,62 L695,40 L725,55 L745,30 L770,52 L795,25 L815,50 L845,42 L865,65 L890,38 L915,58 L935,30 L965,52 L985,28 L1010,60 L1035,35 L1055,58 L1085,25 L1105,50 L1130,32 L1155,55 L1175,40 L1200,60 V0 Z"
          fill={color} 
        />
      </svg>
    </div>
  );
};

export default PaperDivider;