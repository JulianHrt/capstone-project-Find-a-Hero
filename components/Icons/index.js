import styled, { css } from "styled-components";

const svg = {
  search:
    "m19.6 21.225-6.35-6.35q-.75.575-1.725.925-.975.35-2.075.35-2.775 0-4.7-1.938Q2.825 12.275 2.825 9.5q0-2.775 1.925-4.713Q6.675 2.85 9.45 2.85q2.775 0 4.713 1.937Q16.1 6.725 16.1 9.5q0 1.1-.337 2.075-.338.975-.913 1.7l6.325 6.35ZM9.45 13.85q1.825 0 3.1-1.263 1.275-1.262 1.275-3.087 0-1.825-1.275-3.088-1.275-1.262-3.1-1.262-1.825 0-3.087 1.262Q5.1 7.675 5.1 9.5q0 1.825 1.263 3.087Q7.625 13.85 9.45 13.85Z",
  results:
    "M14.15 10.95q1.25 0 2.138-.888.887-.887.887-2.162t-.887-2.163Q15.4 4.85 14.15 4.85q-1.275 0-2.162.887-.888.888-.888 2.163t.888 2.162q.887.888 2.162.888ZM8.2 15.375q1.125-1.3 2.688-1.988 1.562-.687 3.262-.687t3.25.687q1.55.688 2.675 1.988V3.925H8.2v11.45Zm0 2.7q-.925 0-1.6-.675t-.675-1.6V3.925q0-.925.675-1.6t1.6-.675h11.875q.925 0 1.6.675t.675 1.6V15.8q0 .925-.675 1.6t-1.6.675ZM3.925 22.35q-.925 0-1.6-.675t-.675-1.6v-14h2.275v14h14v2.275ZM14.15 8.85q-.425 0-.7-.263-.275-.262-.275-.687 0-.4.275-.675t.7-.275q.4 0 .675.275t.275.675q0 .425-.275.687-.275.263-.675.263Zm-3.3 6.95h6.6q-.725-.5-1.575-.75t-1.725-.25q-.875 0-1.725.25-.85.25-1.575.75Zm3.3-6.15Z",
  add: "M10.85 19.15v-6h-6v-2.3h6v-6h2.3v6h6v2.3h-6v6Z",
  edit: "M5.05 19h1.3l8.575-8.575-1.3-1.3L5.05 17.7ZM19.325 9 15.05 4.75l1.225-1.225q.65-.675 1.6-.675.95 0 1.625.65l1.175 1.2q.625.6.637 1.45.013.85-.587 1.45Zm-1.45 1.45L7.25 21.1h-4.3v-4.275L13.6 6.175Zm-3.6-.675-.65-.65 1.3 1.3Z",
  delete:
    "M6.925 21.2q-.925 0-1.6-.662-.675-.663-.675-1.613V6.075H3.525V3.8H8.85V2.65h6.275V3.8h5.35v2.275H19.35v12.85q0 .95-.675 1.613-.675.662-1.6.662Zm10.15-15.125H6.925v12.85h10.15ZM8.9 17h2.125V8H8.9Zm4.075 0H15.1V8h-2.125ZM6.925 6.075v12.85Z",
  lockClosed:
    "M6.075 22.175q-.95 0-1.612-.662Q3.8 20.85 3.8 19.9v-9.85q0-.925.663-1.6.662-.675 1.612-.675H6.9V5.95q0-2.125 1.487-3.613Q9.875.85 12 .85t3.613 1.487Q17.1 3.825 17.1 5.95v1.825h.825q.95 0 1.613.675.662.675.662 1.6v9.85q0 .95-.662 1.613-.663.662-1.613.662Zm0-2.275h11.85v-9.85H6.075v9.85ZM12 16.975q.825 0 1.413-.588Q14 15.8 14 14.975t-.587-1.413q-.588-.587-1.413-.587-.825 0-1.412.587Q10 14.15 10 14.975q0 .825.588 1.412.587.588 1.412.588Zm-2.825-9.2h5.65V5.95q0-1.175-.825-2t-2-.825q-1.175 0-2 .825t-.825 2ZM6.075 19.9v-9.85 9.85Z",
  lockOpen:
    "M6.075 7.775h8.75V5.95q0-1.175-.825-2t-2-.825q-1.175 0-2 .825t-.825 2H6.9q0-2.125 1.487-3.613Q9.875.85 12 .85t3.613 1.487Q17.1 3.825 17.1 5.95v1.825h.825q.95 0 1.613.675.662.675.662 1.6v9.85q0 .95-.662 1.613-.663.662-1.613.662H6.075q-.95 0-1.612-.662Q3.8 20.85 3.8 19.9v-9.85q0-.925.663-1.6.662-.675 1.612-.675Zm0 12.125h11.85v-9.85H6.075v9.85ZM12 16.975q.825 0 1.413-.588Q14 15.8 14 14.975t-.587-1.413q-.588-.587-1.413-.587-.825 0-1.412.587Q10 14.15 10 14.975q0 .825.588 1.412.587.588 1.412.588ZM6.075 19.9v-9.85 9.85Z",
  close:
    "m6.4 19.2-1.6-1.6 5.6-5.6-5.6-5.6 1.6-1.6 5.6 5.6 5.6-5.6 1.6 1.6-5.6 5.6 5.6 5.6-1.6 1.6-5.6-5.6Z",
  back: "m9.025 18.2-6.2-6.2 6.2-6.2 1.6 1.6-3.475 3.45h14.025v2.3H7.15l3.475 3.45Z",
  done: "m9.55 18.2-5.9-5.9 1.625-1.625L9.55 14.95l9.175-9.175L20.35 7.4Z",
  save: "M21.2 6.925v12q0 .95-.662 1.613-.663.662-1.613.662H5.075q-.95 0-1.612-.662-.663-.663-.663-1.613V5.075q0-.95.663-1.613.662-.662 1.612-.662h12Zm-2.275.95-2.8-2.8H5.075v13.85h13.85ZM12 17.925q1.25 0 2.125-.875T15 14.925q0-1.25-.875-2.125T12 11.925q-1.25 0-2.125.875T9 14.925q0 1.25.875 2.125t2.125.875Zm-5.925-7.85h9v-4h-9Zm-1-2.2v11.05-13.85Z",
  book: "M7 22.1q-.825 0-1.412-.587Q5 20.925 5 20.1q0-.825.588-1.412Q6.175 18.1 7 18.1t1.412.588Q9 19.275 9 20.1t-.588 1.413Q7.825 22.1 7 22.1Zm10 0q-.825 0-1.412-.587Q15 20.925 15 20.1q0-.825.588-1.412.587-.588 1.412-.588t1.413.588Q19 19.275 19 20.1t-.587 1.413q-.588.587-1.413.587ZM6.3 6.1l2.25 4.725h7L18.125 6.1ZM5.25 3.9h14.525q.675 0 1.037.612.363.613.038 1.213L17.425 11.9q-.275.525-.762.812Q16.175 13 15.6 13H8.2l-1.05 1.9H19.1v2.2H7q-1.2 0-1.8-1.038-.6-1.037-.025-2.062L6.5 11.6 2.95 4.1H.9V1.9h3.4Zm3.3 6.925h7Z",
  upload:
    "M11 18.95h2v-4.2l1.6 1.6 1.4-1.4-4-4.025-4 4.025 1.425 1.375L11 14.75ZM6.075 22.2q-.95 0-1.612-.662-.663-.663-.663-1.613V4.075q0-.95.663-1.613.662-.662 1.612-.662h8L20.2 7.925v12q0 .95-.662 1.613-.663.662-1.613.662Zm6.85-13.125v-5h-6.85v15.85h11.85V9.075Zm-6.85-5v5-5 15.85-15.85Z",
  mail: "M4.075 20.2q-.95 0-1.613-.662-.662-.663-.662-1.613V6.075q0-.95.662-1.613.663-.662 1.613-.662h15.85q.95 0 1.613.662.662.663.662 1.613v11.85q0 .95-.662 1.613-.663.662-1.613.662ZM12 13.25l-7.925-5v9.675h15.85V8.25Zm0-2.175 7.925-5H4.075ZM4.075 8.25V6.075 17.925Z",
  phone:
    "M7.1 23.175q-.95 0-1.612-.662-.663-.663-.663-1.613V3.1q0-.95.663-1.613Q6.15.825 7.1.825h9.8q.95 0 1.613.662.662.663.662 1.613v17.8q0 .95-.662 1.613-.663.662-1.613.662Zm0-3.275v1h9.8v-1Zm0-2h9.8V6.1H7.1Zm0-13.8h9.8v-1H7.1Zm0 0v-1 1Zm0 15.8v1Z",
};

export default function Icons({ variant, color, children }) {
  return (
    <IconContainer color={color} variant={variant}>
      <svg width="24" height="24">
        <path fill={color} d={svg[variant]} />
      </svg>
      <p>{children}</p>
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 9vw;
  border-bottom: 2px solid ${({ color }) => color};

  ${({ variant }) =>
    variant === "add" &&
    css`
      border: none;
    `}

  ${({ variant }) =>
    variant === "search" &&
    css`
      border: none;
    `}

    ${({ variant }) =>
    variant === "results" &&
    css`
      border: none;
    `}


  p {
    font-size: 0.75rem;
    margin-top: 0;
    text-transform: capitalize;
  }
`;
