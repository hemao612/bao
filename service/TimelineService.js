import axios from 'axios';

// export const base = 'http://10.28.0.239:8081';
export const base = 'http://47.115.20.79:8081';

export const getTimelineList = async () => axios({
  url: `${base}/timeline/all`,
  method: 'get'
});

export const submitTimeline = async (title, description, date, user)=> axios({
  url: `${base}/timeline/add?title=${title}&description=${description}&date=${date}&user=${user}`,
  method: 'post'
});

