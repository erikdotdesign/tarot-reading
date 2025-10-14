const { widget } = figma;
const { useEffect } = widget;

const useUIMessage = () => {
  const handleUIMessages = async (msg: any) => {
    console.log(msg);
  };

  useEffect(() => {
    figma.ui.on("message", handleUIMessages);
    return () => figma.ui.off("message", handleUIMessages);
  });
};

export default useUIMessage;