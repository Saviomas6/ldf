import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  LPBalancevalue: number;
  claimableRewardsvalue:number;
  MaxYouCanBuyValue:number;
  pendingRewardValue:number;
  vestingTermValue:number;
  timeuntillfullyvestedvalue:number;
  youwillgetvalue:number;
  modal:boolean;
}

export const initialvalue: CounterState = {
  LPBalancevalue: 0,
  claimableRewardsvalue:0,
  MaxYouCanBuyValue:0,
  pendingRewardValue:0,
  vestingTermValue:0,
  timeuntillfullyvestedvalue:0,
  youwillgetvalue:0,
  modal:false
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialvalue,
  reducers: {
    LPBalance: (state, action: PayloadAction<number>) => {
      state.LPBalancevalue = action.payload;
    },
    ClaimableReward: (state, action: PayloadAction<number>) => {
      state.claimableRewardsvalue = action.payload;
    },
    MaxYouCanBuy: (state, action: PayloadAction<number>) => {
      state.MaxYouCanBuyValue = action.payload;
    },
    PendingReward: (state, action: PayloadAction<number>) => {
      state.pendingRewardValue = action.payload;
    },
    VestingTerms: (state, action: PayloadAction<number>) => {
      state.vestingTermValue = action.payload;
    },
    TimeUntillFully: (state, action: PayloadAction<number>) => {
      state.timeuntillfullyvestedvalue = action.payload;
    },
    YouWillGeting: (state, action: PayloadAction<number>) => {
      state.youwillgetvalue = action.payload;
    },
    Togging: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
});

export const { LPBalance,ClaimableReward,MaxYouCanBuy,PendingReward,VestingTerms,TimeUntillFully,YouWillGeting,Togging } = counterSlice.actions;

export default counterSlice.reducer;
