import { useReducer, createContext, useContext } from "react";

const proList = [
  {
    id: 1,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "new",
  },
  {
    id: 2,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수2",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "new",
  },
  {
    id: 3,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수3",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "general",
  },
  {
    id: 4,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수4",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "general",
  },
  {
    id: 5,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수5",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "general",
  },
  {
    id: 6,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수6",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "general",
  },
  {
    id: 7,
    path: process.env.PUBLIC_URL + "/images/Asepeimg01.png",
    name: "설화수7",
    account: "[아세페ONLY]자음생크림 리치 30ml",
    price: "151,200원",
    type: "asepe",
    type2: "general",
  },
  {
    id: 8,
    path: process.env.PUBLIC_URL + "/images/gift_img.jpg",
    name: "프리메라1",
    account: "NEW(AD) 맨오가니언스 2종 기획세트(워터 230ml+에멀젼 160ml)",
    price: "72,000원",
    seil: "50,400원(30%)",
    type: "best",
    gift: false,
  },
  {
    id: 9,
    path: process.env.PUBLIC_URL + "/images/gift_img.jpg",
    name: "프리메라2",
    account: "NEW(AD) 맨오가니언스 2종 기획세트(워터 230ml+에멀젼 160ml)",
    price: "72,000원",
    seil: "50,400원(30%)",
    type: "best",
    gift: true,
  },
  {
    id: 10,
    path: process.env.PUBLIC_URL + "/images/gift_img.jpg",
    name: "프리메라3",
    account: "NEW(AD) 맨오가니언스 2종 기획세트(워터 230ml+에멀젼 160ml)",
    price: "72,000원",
    seil: "50,400원(30%)",
    type: "best",
    gift: false,
  },
  {
    id: 11,
    path: process.env.PUBLIC_URL + "/images/gift_img.jpg",
    name: "프리메라4",
    account: "NEW(AD) 맨오가니언스 2종 기획세트(워터 230ml+에멀젼 160ml)",
    price: "72,000원",
    seil: "50,400원(30%)",
    type: "best",
    gift: true,
  },
  {
    id: 1,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "event",
  },
  {
    id: 2,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "event",
  },
  {
    id: 3,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "event",
  },
  {
    id: 4,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "event",
  },
  {
    id: 5,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "progress",
  },
  {
    id: 6,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "progress",
  },
  {
    id: 7,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "event",
  },
  {
    id: 8,
    path: process.env.PUBLIC_URL + "/images/eve_img01.jpg",
    name: "[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!",
    date: "2024.12.09 ~ 2024.12.22",
    type: "event",
  },
];

function ProReducer(state, action) {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
//특정의 상태값이나 액션이 적용될 컴포넌트를 설정
const ProStateContext = createContext();
const ProDispatchContext = createContext();

export function ProProvider({ children }) {
  const [state, dispatch] = useReducer(ProReducer, proList);
  return (
    <ProStateContext.Provider value={state}>
      <ProDispatchContext.Provider value={dispatch}>
        {children}
      </ProDispatchContext.Provider>
    </ProStateContext.Provider>
  );
}
//createContext메소드 만들어진 컴포넌트를 연결해주는 컴포넌트
export function ProState() {
  return useContext(ProStateContext);
}
export function ProDispatch() {
  return useContext(ProDispatchContext);
}
