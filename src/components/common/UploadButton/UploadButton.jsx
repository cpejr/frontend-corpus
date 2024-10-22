import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function UploadButton({
  sendBack,
}) {
  const [file, setFile] = useState(null); // Armazena apenas um arquivo

  const props = {
    onRemove: () => {
      setFile(null); // Remove o arquivo quando o usuário clica em remover
    },
    beforeUpload: (file) => {
      setFile(file); // Armazena o arquivo
      return false; // Evita o upload automático
    },
    fileList: file ? [file] : [], // Mantém apenas o arquivo no formato esperado
  };

  const handleUpload = async () => {
    if (!file) {
      message.error('Nenhum arquivo selecionado.');
      return;
    }

    try {
      await sendBack(file); // Envia o FormData
      message.success('Upload realizado com sucesso!');
      setFile(null); // Limpa o arquivo após o sucesso
    } catch (error) {
      message.error('Erro ao fazer upload.');
    }
  };

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Selecionar Arquivo</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={!file} // Desabilita se não houver arquivo
        style={{ marginTop: 16 }}
      >
        Enviar
      </Button>
    </div>
  );
}

UploadButton.defaultProps = {
  color: "white",
};

UploadButton.propTypes = {
  sendBack: PropTypes.func.isRequired,
};
