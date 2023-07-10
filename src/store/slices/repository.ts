import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RepositoryStateInterface, RepositoryInterface} from '../../types';

const initialState: RepositoryStateInterface = {
  repositories: [],
};

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    setRepositories: (state, action: PayloadAction<RepositoryInterface[]>) => {
      state.repositories = action.payload;
    },
  },
});

export const {setRepositories} = repositorySlice.actions;

export default repositorySlice.reducer;
