const values = {
  VALID_EXTENSIONS: {
    document: [
      '.png',
      '.jpg',
      '.jpeg',
      '.pdf',
      '.word',
      '.doc',
      '.docx',
      '.xml',
      'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      '.xls',
      '.xlsx',
      '.xlsm',
      '.xlsb',
    ],
    pdf: ['.pdf'],
    img: ['.png', '.jpg', '.jpeg'],
    voucher: ['.pdf', '.png', '.jpg', '.jpeg'],
    excel: ['xls', 'xlsx', 'xlsm', 'xlsb'],
  },
  IMAGE_EXTENSIONS: ['png', 'jpg', 'jpeg'],
  PDF_EXTENSIONS: ['pdf'],
  WORD_EXTENSIONS: [
    'word',
    'doc',
    'docx',
    'xml',
    'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
  EXCEL_EXTENSIONS: ['xls', 'xlsx', 'xlsm', 'xlsb'],
};

export function validateFile(
  oInput: HTMLInputElement,
  file_kind: keyof typeof values.VALID_EXTENSIONS,
  index?: number
) {
  if (oInput.type !== 'file') return;
  if (oInput.value.length < 1) return;

  let isValid = false,
    validFileExtensions = values.VALID_EXTENSIONS[file_kind];
  for (let j = 0; j < validFileExtensions.length; j++) {
    let sCurExtension = validFileExtensions[j];
    if (
      oInput?.files?.[index || 0]?.name
        .substr(
          oInput?.files?.[index || 0]?.name?.length - sCurExtension.length,
          sCurExtension.length
        )
        .toLowerCase() === sCurExtension.toLowerCase()
    ) {
      isValid = true;
      break;
    }
  }
  return isValid;
}

export function checkFileType(fileName: string) {
  const splitted = fileName.split('.');
  const extension = splitted[splitted.length - 1];
  if (extension === 'pdf') return 'pdf';
  else if (values.IMAGE_EXTENSIONS.includes(extension)) return 'image';
  else if (values.WORD_EXTENSIONS.includes(extension)) return 'word';
  else if (values.EXCEL_EXTENSIONS.includes(extension)) return 'excel';
  else return 'other';
}
