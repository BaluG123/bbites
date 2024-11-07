import axios from 'axios';

const BASE_URL = 'http://smartupsc.pythonanywhere.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getChapters = () => api.get('/chapters/');
export const getSubjects = () => api.get('/chapters/subjects/');
export const getChaptersBySubject = subject =>
  api.get(`/chapters/by_subject/?subject=${subject}`);
export const getChapterDetail = chapterId => api.get(`/chapters/${chapterId}/`);
export const getPrelims = chapterId =>
  api.get(`/chapters/${chapterId}/questions/prelims/`);
export const getMains = chapterId =>
  api.get(`/chapters/${chapterId}/questions/mains/`);

export const getPrelimsByFilter = (subject, classNumber) =>
  api.get(
    `/questions/prelims/filter/?subject=${subject}&class_number=${classNumber}`,
  );
export const getMainsByFilter = (subject, classNumber) =>
  api.get(
    `/questions/mains/filter/?subject=${subject}&class_number=${classNumber}`,
  );
