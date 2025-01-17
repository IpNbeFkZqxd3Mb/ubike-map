// ./src/data.d.ts

//把所有的型別定義都匯聚在一個宣告檔,專門宣告型別的定義

import { LatLngExpression } from 'leaflet';

// 所有行政區
declare type Districts =

  // Districts 這個複合型別將所有台北市行政區的名稱字串 union 起來

  '中正區' |
  '大同區' |
  '中山區' |
  '松山區' |
  '大安區' |
  '萬華區' |
  '信義區' |
  '士林區' |
  '北投區' |
  '內湖區' |
  '南港區' |
  '文山區';

// 參考台北市政府開放資料 —— 台北市公共自行車即時資訊 
declare type SourceUBikeInfo = {

  // SourceUBikeInfo這個型別對應 UBike 源頭資料的格式

  sno: string;     // 站點代號
  sna: string;     // 場站名稱(中文)
  tot: string;     // 場站總停車格
  sbi: string;     // 場站目前車輛數量
  sarea: string;   // 場站區域(中文)，如：信義區
  mday: string;    // 資料更新時間
  lat: string;     // 緯度
  lng: string;     // 經度
  ar: string;      // 地區(中文)
  sareaen: string; // 場站區域(英文)
  snaen: string;   // 場站名稱(英文)
  aren: string;    // 地址(英文)
  bemp: string;    // 空位數量
  act: string;     // 全站禁用狀態  
};

// 希望轉換的格式
declare type UBikeInfo = {

  // UBikeInfo 為在這個應用程式裡需要用到的格式

  availableBikes: number;    // 目前自行車數量 —— 對應 sbi 欄位
  totalBikes: number;        // 所有自行車格數 —— 對應 tot 欄位
  latLng: LatLngExpression;  // 經緯度 —— 對應 lat, lng 欄位
  regionName: Districts;     // 站場區域，如：信義區 —— 對應 sarea
  stopName: string;          // 站點名稱，如：捷運市府站 3 號出口處 —— 對應 sna 欄位
};

//可以將 Districts、SourceUBikeInfo 與 UBikeInfo 的型別宣告從 fetchData.ts 與 districtData.ts 拔除，並且從 data.d.ts 載入進去