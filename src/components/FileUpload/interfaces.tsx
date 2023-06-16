import GeneralApi from '../../utils/generalApi';

export interface IFileUploadComponent {
  label: string;
  generalApi: GeneralApi;
  files: Array<IFile>;
  setFiles: (files: Array<IFile>) => void;
  folder?: string;
  name?: string;
  maxFiles?: number;
  canBeEmpty?: boolean;
}

export interface IFile {
  name: string;
  url: string;
  uploaded_at?: string;
}
