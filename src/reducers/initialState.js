export const initialState = {
  forms: [
    {
      formId: 1,
      title: '예제 폼',
      formList: [
        {
          id: 'name',
          type: 'text',
          required: true,
          label: '이름',
          placeholder: '주민등록상 이름 입력',
          description: '설명영역',
        },
        {
          id: 'phone',
          type: 'phone',
          required: true,
          label: '휴대폰 번호',
          placeholder: '',
          description: '',
        },
        {
          id: 'address',
          type: 'address',
          required: true,
          label: '배송지',
          description: '',
        },
        {
          id: 'input_0',
          type: 'select',
          label: '옵션1',
          options: ['S', 'L', 'XL', 'XXL'],
          required: true,
        },
        {
          id: 'input_1',
          type: 'file',
          label: '첨부파일',
          required: false,
          description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
        },
        {
          id: 'agreement_0',
          type: 'agreement',
          label: '개인정보 수집 약관 동의',
          required: true,
          contents: '<p>(개인정보 수집 및 약관 내용)</p>',
        },
      ],
      submitData: [
        {
          name: '이름이름',
          phone: '000-0000-0000',
          address: '주소주소 주소주소주소',
          input_0: 'S',
          input_1: 'https://imageurl/88783434.png',
          agreement_0: true,
        },
      ],
    },
  ],
};
