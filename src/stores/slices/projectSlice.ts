import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { projects } from '@/data/projects';


interface Project {
  id: number;
  title: string;
  description: string;
  isMain: boolean;
}

interface ProjectState {
  projects: Project[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  status: 'idle',
  error: null,
};

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  // const response = await fetch('/api/projects');
  // return response.json();
  return projects || [];
});

export const getMainProject = (projects: Project[]) => {
  return projects.filter((project) => project.isMain);
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.projects = action.payload;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch projects';
    });
  },
});

export default projectSlice.reducer;