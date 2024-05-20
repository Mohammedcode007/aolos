import React, { useEffect, useState, useRef } from "react";

const WheelComponent = ({
  segments,
  isNumberSpinner,
  segColors,
  winningSegment,
  onFinished,
  onRotate,
  onRotatefinish,
  primaryColor,
  primaryImage,
  selectedOptionDrop,
  primaryColoraround,
  contrastColor,
  buttonText,
  isOnlyOnce = true,
  size = 290,
  upDuration = 1000,
  downDuration = 100,
  fontFamily = "proxima-nova",
  width = 100,
  height = 100,
  count,
}) => {
  console.log(winningSegment,'winningSegment');
  const [copiedValue, setCopiedValue] = useState(selectedOptionDrop);
  const prevOriginalValue = useRef(selectedOptionDrop);

  useEffect(() => {
    if (prevOriginalValue.current !== selectedOptionDrop) {
      setCopiedValue(selectedOptionDrop);
      prevOriginalValue.current = selectedOptionDrop;
    }
  }, [selectedOptionDrop]);
  console.log(prevOriginalValue, "copiedValue");
  const [check, setcheck] = useState(false);
  const [number, setNumber] = useState(false);
  const numberRef = useRef(number);
  const [countPlyay, setcountPlyay] = useState(1);

  useEffect(() => {
    if (check) {
      setcountPlyay((prevCount) => {
        if (prevCount >= count) {
          setNumber(true);
          numberRef.current = true;
          return prevCount;
        }

        return prevCount + 1;
      });
    }
  }, [check]);

  let currentSegment = "";
  let isStarted = false;
  const [isFinished, setFinished] = useState(false);
  let timerHandle = 0;
  const timerDelay = segments.length;
  let angleCurrent = 0;
  let angleDelta = 0;
  let canvasContext = null;
  let maxSpeed = Math.PI / segments.length;
  const upTime = segments.length * upDuration;
  const downTime = segments.length * downDuration;
  let spinStart = 0;
  let frames = 0;
  const centerX = 300;
  const centerY = 300;
  const [imageLoaded, setImageLoaded] = useState(false);
  let img = new Image();

  useEffect(() => {
    if (primaryImage) {
      img.src = primaryImage;
      img.onload = () => {
        setImageLoaded(true);
        wheelInit();
      };
    } else {
      wheelInit();
    }
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 0);
  }, [segments, contrastColor, primaryColor, primaryImage, copiedValue]);

  const wheelInit = () => {
    initCanvas();
    wheelDraw();
  };

  const initCanvas = () => {
    let canvas = document.getElementById("canvas");
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      canvas.setAttribute("id", "canvas");
      document.getElementById("wheel").appendChild(canvas);
    }
    canvas.addEventListener("click", spin, false);
    canvasContext = canvas.getContext("2d");
  };

  const spin = () => {
    setcheck(false);

    if (numberRef.current) {
      console.log("1111111111");
      return;
    }

    isStarted = true;
    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  const onTimerTick = () => {
    frames++;
    draw();
    const duration = new Date().getTime() - spinStart;
    let progress = 0;
    let finished = false;
    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        if (progress >= 0.8) {
          angleDelta =
            (maxSpeed / 1.2) * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        } else if (progress >= 0.98) {
          angleDelta =
            (maxSpeed / 2) * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        } else {
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        }
      }
      if (progress >= 1) {
        finished = true;
        setcheck(true);
      }
    }

    angleCurrent += angleDelta;
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  const wheelDraw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const draw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = canvasContext;
    const value = segments[key]?.col1;
    ctx.save();
    ctx.beginPath();

    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segments[key]?.wheelColor;
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = segments[key]?.textColor;
    ctx.font = "bold 1em " + fontFamily;
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    let angleAdjustment = 0;
    if (prevOriginalValue.current === "left") {
      angleAdjustment = -20;
    } else if (prevOriginalValue.current === "right") {
      angleAdjustment = 40;
    } else if (prevOriginalValue.current === "top") {
      angleAdjustment = 0;
    } else if (prevOriginalValue.current === "bottom") {
      angleAdjustment = 60;
    }

    const ctx = canvasContext;
    let lastAngle = angleCurrent + angleAdjustment;
    const len = segments.length;
    const PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor || "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em " + fontFamily;
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent + angleAdjustment; // +40
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    // Draw a center circle or image
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, PI2, false);
    ctx.closePath();
    if (primaryImage) {
      ctx.save();
      ctx.clip();
      ctx.drawImage(img, centerX - 40, centerY - 40, 80, 80);
      ctx.restore();
    } else {
      ctx.fillStyle = primaryColor || "black";
      ctx.lineWidth = 5;
      ctx.strokeStyle = contrastColor || "white";
      ctx.fill();
      ctx.font = "bold 2em " + fontFamily;
      ctx.fillStyle = contrastColor || "white";
      ctx.textAlign = "center";
      ctx.fillText(buttonText || "Spin", centerX, centerY + 3);
      ctx.stroke();
    }

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = primaryColoraround || "white";
    ctx.stroke();
  };

  const drawNeedle = () => {
    const ctx = canvasContext;
    ctx.lineWidth = 1;
    ctx.strokeStyle = contrastColor || "red";
    ctx.fileStyle = contrastColor || "red";

    ctx.beginPath();
    if (prevOriginalValue.current === "left") {
      const needleLength = 20; // Length of the needle
      const needleWidth = 10; // Width of the needle base

      ctx.lineWidth = 1;
      ctx.strokeStyle = contrastColor || "red";
      ctx.fillStyle = contrastColor || "red";

      ctx.beginPath();
      // Position needle on the left edge of the wheel pointing inward
      ctx.moveTo(centerX - size, centerY - needleWidth / 2); // Top point of the needle
      ctx.lineTo(centerX - size, centerY + needleWidth / 2); // Bottom point of the needle
      ctx.lineTo(centerX - size + needleLength, centerY);
    } else if (prevOriginalValue.current === "right") {
      const needleLength = 20; // Length of the needle
      const needleWidth = 10; // Width of the needle base

      ctx.lineWidth = 1;
      ctx.strokeStyle = contrastColor || "red";
      ctx.fillStyle = contrastColor || "red";

      ctx.beginPath();
      // Position needle on the right edge of the wheel pointing inward
      ctx.moveTo(centerX + size, centerY - needleWidth / 2); // Top point of the needle
      ctx.lineTo(centerX + size, centerY + needleWidth / 2); // Bottom point of the needle
      ctx.lineTo(centerX + size - needleLength, centerY);
    } else if (prevOriginalValue.current === "bottom") {
      const needleLength = 20; // Length of the needle
      const needleWidth = 10; // Width of the needle base

      ctx.lineWidth = 1;
      ctx.strokeStyle = contrastColor || "red";
      ctx.fillStyle = contrastColor || "red";

      ctx.beginPath();
      // Position needle on the bottom edge of the wheel pointing inward
      ctx.moveTo(centerX - needleWidth / 2, centerY + size); // Left point of the needle
      ctx.lineTo(centerX + needleWidth / 2, centerY + size); // Right point of the needle
      ctx.lineTo(centerX, centerY + size - needleLength);
    } else if (prevOriginalValue.current === "center") {
    
      // Default to top position
      ctx.moveTo(centerX + 10, centerY - 40);
      ctx.lineTo(centerX - 10, centerY - 40);
      ctx.lineTo(centerX, centerY - 60);
    } else if (prevOriginalValue.current === "top") {
      const needleLength = 20; // Length of the needle
      const needleWidth = 10; // Width of the needle base

      ctx.lineWidth = 1;
      ctx.strokeStyle = contrastColor || "red";
      ctx.fillStyle = contrastColor || "red";

      ctx.beginPath();
      // Position needle on the top edge of the wheel pointing inward
      ctx.moveTo(centerX - needleWidth / 2, centerY - size); // Left point of the needle
      ctx.lineTo(centerX + needleWidth / 2, centerY - size); // Right point of the needle
      ctx.lineTo(centerX, centerY - size + needleLength); // Tip of the needle pointing inward
    }
    ctx.closePath();
    ctx.fill();

    const change = angleCurrent + Math.PI / 2;
    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1;
    if (i < 0) i = i + segments.length;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "transparent";
    ctx.font = "bold 1.5em " + fontFamily;
    currentSegment = segments[i]?.col1;
    isStarted &&
      ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
  };

  const clear = () => {
    const ctx = canvasContext;
    ctx.clearRect(0, 0, 1000, 800);
  };

  return (
    <div id="wheel">
      <canvas
        id="canvas"
        width="600"
        height="600"
        style={{
          pointerEvents: isFinished && isOnlyOnce ? "none" : "auto",
        }}
      />
    </div>
  );
};

export default WheelComponent;
