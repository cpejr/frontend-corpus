import { useState, useEffect } from "react";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { AddButton } from "./Styles";

export default function UploadButton({
  label,
  setValue,
  sendForms,
  acceptString,
}) {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (sendForms) {
      setFile(null);
      setValue(null);
    }
  }, [sendForms, setValue]);

  const handleUpload = async (fileObj) => {
    if (!fileObj) {
      message.error("Nenhum arquivo selecionado.");
      return;
    }

    try {
      const reader = new FileReader();

      reader.onloadend = function () {
        setValue(label, reader.result.split(",")[1]);
      };

      reader.readAsDataURL(fileObj);
      setFile(fileObj);
    } catch (error) {
      message.error("Erro ao fazer upload.");
    }
  };

  const props = {
    onRemove: () => {
      setFile(null);
      setValue(label, null);
    },
    onChange: ({ file: newFile }) => {
      handleUpload(newFile);
    },
    fileList: file ? [file] : [],
    multiple: false,
    accept: acceptString,
  };

  return (
    <div>
      <Upload {...props}>
        <AddButton icon={<UploadOutlined />}>Selecionar Arquivo</AddButton>
      </Upload>
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
