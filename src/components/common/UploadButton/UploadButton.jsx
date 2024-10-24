import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function UploadButton({
  label,
  setValue,
  sendForms,
  acceptString,
}) {
  const [file, setFile] = useState(null); 

  if (sendForms) {
    setFile(null);
    setValue(null);
  }

  const props = {
    onRemove: () => {
      setFile(null); 
    },
    beforeUpload: (file) => {
      setFile(file); 
      return false; 
    },
    fileList: file ? [file] : [], 
    multiple: false, 
    accept: acceptString,
  };

  const handleUpload = async () => {
    if (!file) {
      message.error('Nenhum arquivo selecionado.');
      return;
    }

    try {
      const reader = new FileReader();

      reader.onloadend = function() {
        setValue(label, reader.result.split(',')[1]);
      } 

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
        disabled={!file}
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
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  acceptString: PropTypes.string.isRequired,
  sendForms: PropTypes.bool.isRequired,
};
