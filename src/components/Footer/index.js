import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src="https://lh3.googleusercontent.com/B_izvW9ZawWMcPSG5ORYzAQPcVOZbqBSv-s57IUTNntb58o7p8jPyZV_1pNQaOftqpovWI23ucKAuRJcw-aPMHti4fI3ioLoh6Fh35D-Wc1EVPIvABfFd3sRzd9ZXwoOWPG2HyI1nfzpo2x0kw1e6Gztc-ixcfHfMGXqmF4jSnkLumq0ydPk8GT7_av27RPb_LJ1PaqIU5-bhFty4udaocmhhGnDFNx6s7Wx37etd6QmzlKTaq9U24WQDRS0d3vOsgb40FvnTw4g4JYS3vGu_R7RtkYpaSDsxqRWXZuwlbhGgbQBCboEOprTbdOvvGKCKD_OeLj0EVrbBovbcqZgt-YHK9saL4NMF-qm0IVtKNCQ-A42qOtkRXTcmV4HRM6HCK_shBU63wqV81OHrYgRGBrSEVMf8Byhg0gw-4rDrPg3gN4OKB-VIrDt0wZntlweJEs4zcCs6-b_Z_H8GyOUcZ0TAIeez73E5mLoaQMcSs90h06GJJ8bAmv8JFJSjrT0PgP_Dw8fu2rENaopO2JQ1l1wq-QixNG-u9DltPIfQTdVYO__P4XmA0Jl6KipbCm0mBZz2bJ2KZfnuNUR1PD8UBoRQs5AlpYrs59Oq106aL6i18iqhfKqag3eMrz9_XiwFbonLDLLZ34VX1wuYpC8cqmI1OrwzOjeMQ7Bla-Hheos5Ooaauc9GxtM3TO_rj0=w584-h170-no?authuser=0" alt="Logo Codeflix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
