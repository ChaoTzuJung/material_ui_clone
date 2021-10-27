# `@chips/web`

## Getting Started
#### basic setup
`yarn`  
#### Development
`yarn run dev`
#### Production
`yarn run build`

---
## Application structure
```
src/
├── api/
|   ├── index.ts
│   └── instance.ts                         [base api url]
├── assets/
├── common/                                 [應用級別的通用元件]
│   ├── components
│   │   └── ArticleComponent.jsx
│   └── containers
│       └── ArticleContainer.js
├── pages/
|   ├── cell/                               [單個元件區域]
|   |   └── feature1/
|   |       ├── feature1Container           [功能拆分出的專用元件]
|   |       └── components/
|   |           └── feature1Components.tsx  [容器元件]
│   └── compound/                           [組合元件區域]
|       └── feature1/
|           ├── feature1Container           [功能拆分出的專用元件]
|           └── components/
|               └── feature1Components.tsx  [容器元件]
├── docs/                                   [文件、style guides]
├── helpers(or lib)/                        [純資料邏輯處理相關、middleware]
│   └── utils.ts
├── Interface/
├── mocks/                                  [fake Api 相關]
├── redux/
|   ├── sagas/                              [所有saga]
|   ├── slice/                              [所有slice]
|   ├── hooks.ts                            [hooks type]
|   ├── rootReducer.ts
|   ├── rootSaga.ts
|   └── store.ts
├── routes/
|   ├── PrivateRoute.ts
│   └── index.ts
├── App.tsx
└── index.tsx
```
