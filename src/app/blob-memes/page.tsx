'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function BlobMemePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [topText, setTopText] = useState('WHEN THE');
  const [bottomText, setBottomText] = useState('MARKET DUMPS');
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [selectedBlob, setSelectedBlob] = useState('blob.png');
  const [selectedBackground, setSelectedBackground] = useState('white');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState(36);
  const [outlineColor, setOutlineColor] = useState('#ffffff');
  const [isGenerating, setIsGenerating] = useState(false);

  const blobVariations = [
    { id: 'blob.png', name: 'Classic Blob', emoji: '🟣' },
    { id: 'cool.png', name: 'Cool Blob', emoji: '😎' },
    { id: 'crown.png', name: 'King Blob', emoji: '👑' },
    { id: 'cap.png', name: 'Street Blob', emoji: '🧢' },
    { id: 'bullish.png', name: 'Bullish Blob', emoji: '📈' },
    { id: 'rocket.png', name: 'Moon Blob', emoji: '🚀' },
    { id: 'drool.png', name: 'Hungry Blob', emoji: '🤤' },
    { id: 'sweat.png', name: 'Nervous Blob', emoji: '😅' },
  ];

  const backgrounds = [
    { id: 'white', name: 'White', style: '#ffffff' },
    { id: 'black', name: 'Black', style: '#000000' },
    { id: 'purple', name: 'Purple', style: '#7c3aed' },
    { id: 'orange', name: 'Orange', style: '#f97316' },
    { id: 'gradient-purple', name: 'Purple Gradient', style: 'linear-gradient(45deg, #7c3aed, #a855f7)' },
    { id: 'gradient-orange', name: 'Orange Gradient', style: 'linear-gradient(45deg, #f97316, #fb923c)' },
    { id: 'gradient-rainbow', name: 'Rainbow', style: 'linear-gradient(45deg, #f97316, #7c3aed, #06b6d4)' },
    { id: 'transparent', name: 'Transparent', style: 'transparent' },
  ];

  const templates = [
    { id: 'classic', name: 'Classic Meme', description: 'Top and bottom text' },
    { id: 'speech', name: 'Speech Bubble', description: 'Blob says something' },
    { id: 'doge', name: 'Doge Style', description: 'Much wow, very blob' },
    { id: 'drake', name: 'Drake Style', description: 'Blob prefers...' },
  ];

  const presets = [
    { top: 'WHEN THE', bottom: 'MARKET DUMPS', blob: 'sweat.png', bg: 'black' },
    { top: 'WOMP WOMP', bottom: 'PAPER HANDS', blob: 'cool.png', bg: 'gradient-purple' },
    { top: 'MUCH BLOB', bottom: 'VERY ROUND', blob: 'blob.png', bg: 'white' },
    { top: 'OR WOMP', bottom: 'OR DIE', blob: 'crown.png', bg: 'gradient-orange' },
    { top: 'TO THE MOON', bottom: 'WITH BLOB POWER', blob: 'rocket.png', bg: 'black' },
    { top: 'JIGGLE JIGGLE', bottom: 'MAXIMUM BLOBNESS', blob: 'drool.png', bg: 'purple' },
    { top: 'DIAMOND HANDS', bottom: 'HODL STRONG', blob: 'bullish.png', bg: 'gradient-rainbow' },
    { top: 'MUCH WOW', bottom: 'VERY STREET', blob: 'cap.png', bg: 'orange' },
  ];

  const generateMeme = useCallback(async () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 500;
    canvas.height = 500;

    // Background
    const bgStyle = backgrounds.find(bg => bg.id === selectedBackground)?.style || '#ffffff';
    if (bgStyle.includes('gradient')) {
      // Simple gradient (we'll just use solid colors for canvas)
      if (bgStyle.includes('purple')) {
        ctx.fillStyle = '#7c3aed';
      } else if (bgStyle.includes('orange')) {
        ctx.fillStyle = '#f97316';
      } else {
        ctx.fillStyle = '#7c3aed'; // default to purple for rainbow
      }
    } else if (bgStyle === 'transparent') {
      // Keep transparent (no fill)
    } else {
      ctx.fillStyle = bgStyle;
    }
    
    if (bgStyle !== 'transparent') {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Load blob image
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Draw blob in center
      const blobSize = 300;
      const blobX = (canvas.width - blobSize) / 2;
      const blobY = (canvas.height - blobSize) / 2;
      
      ctx.drawImage(img, blobX, blobY, blobSize, blobSize);

      // Text styling
      ctx.fillStyle = textColor;
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = 3;
      ctx.textAlign = 'center';
      ctx.font = `bold ${textSize}px Arial`;

      // Top text
      if (topText) {
        ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 50);
        ctx.fillText(topText.toUpperCase(), canvas.width / 2, 50);
      }

      // Bottom text
      if (bottomText) {
        ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 30);
        ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 30);
      }

      // Template specific additions
      if (selectedTemplate === 'speech') {
        // Speech bubble
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(50, 80, 200, 80, 20);
        ctx.fill();
        ctx.stroke();
        
        // Speech bubble tail
        ctx.beginPath();
        ctx.moveTo(150, 160);
        ctx.lineTo(180, 200);
        ctx.lineTo(120, 180);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Speech text
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${Math.floor(textSize * 0.6)}px Arial`;
        ctx.fillText(topText.toUpperCase(), 150, 125);
      }

      setIsGenerating(false);
    };
    
    img.src = `/images/${selectedBlob}`;
  }, [topText, bottomText, selectedTemplate, selectedBlob, selectedBackground, textColor, textSize, outlineColor, backgrounds]);

  const downloadMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `womp-meme-${selectedBlob.replace('.png', '')}-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const loadPreset = (preset: typeof presets[0]) => {
    setTopText(preset.top);
    setBottomText(preset.bottom);
    if (preset.blob) setSelectedBlob(preset.blob);
    if (preset.bg) setSelectedBackground(preset.bg);
  };

  useEffect(() => {
    generateMeme();
  }, [generateMeme]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-400 to-orange-400 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <Button variant="outline" size="medium" className="text-white border-white font-black">
              ← BACK TO WOMP
            </Button>
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 border-8 border-black inline-block px-8 py-4 bg-black/20 rounded-3xl">
            BLOB MEMES
          </h1>
          
          <p className="text-2xl font-black text-white bg-black/30 rounded-xl p-4 max-w-2xl mx-auto">
            CREATE EPIC WOMP MEMES! 🎨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Meme Generator */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-black text-black mb-6">MEME CREATOR 🎭</h2>
            
            {/* Blob Selection */}
            <div className="mb-6">
              <label className="block text-black font-bold mb-3">CHOOSE YOUR BLOB:</label>
              <div className="grid grid-cols-3 gap-2">
                {blobVariations.map(blob => (
                  <button
                    key={blob.id}
                    onClick={() => setSelectedBlob(blob.id)}
                    className={`p-3 border-2 border-black rounded-lg font-bold text-black text-sm transition-colors ${
                      selectedBlob === blob.id 
                        ? 'bg-purple-300 border-purple-600' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-2xl mb-1">{blob.emoji}</div>
                    <div className="text-xs">{blob.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Background Selection */}
            <div className="mb-6">
              <label className="block text-black font-bold mb-3">BACKGROUND:</label>
              <div className="grid grid-cols-2 gap-2">
                {backgrounds.map(bg => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBackground(bg.id)}
                    className={`p-3 border-2 border-black rounded-lg font-bold text-black text-sm transition-colors ${
                      selectedBackground === bg.id 
                        ? 'bg-purple-300 border-purple-600' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={{
                      background: selectedBackground === bg.id 
                        ? undefined 
                        : bg.style.includes('gradient') 
                          ? bg.style 
                          : bg.style === 'transparent' 
                            ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")` 
                            : bg.style
                    }}
                  >
                    <div className="text-xs font-black" style={{ 
                      color: bg.style === '#000000' ? 'white' : 'black',
                      textShadow: bg.style === '#000000' ? 'none' : '1px 1px 0 white'
                    }}>
                      {bg.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Styling */}
            <div className="mb-6">
              <h3 className="text-xl font-black text-black mb-3">TEXT STYLING:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-black font-bold mb-2 text-sm">TEXT COLOR:</label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-10 border-2 border-black rounded-lg cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-black font-bold mb-2 text-sm">OUTLINE COLOR:</label>
                  <input
                    type="color"
                    value={outlineColor}
                    onChange={(e) => setOutlineColor(e.target.value)}
                    className="w-full h-10 border-2 border-black rounded-lg cursor-pointer"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-black font-bold mb-2 text-sm">TEXT SIZE: {textSize}px</label>
                  <input
                    type="range"
                    min="20"
                    max="60"
                    value={textSize}
                    onChange={(e) => setTextSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Text Inputs */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-black font-bold mb-2">TOP TEXT:</label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg font-bold text-black"
                  placeholder="Enter top text..."
                />
              </div>
              
              <div>
                <label className="block text-black font-bold mb-2">BOTTOM TEXT:</label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg font-bold text-black"
                  placeholder="Enter bottom text..."
                />
              </div>
            </div>

            {/* Template Selection */}
            <div className="mb-6">
              <label className="block text-black font-bold mb-2">TEMPLATE:</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black rounded-lg font-bold text-black"
              >
                {templates.map(template => (
                  <option key={template.id} value={template.id}>
                    {template.name} - {template.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Presets */}
            <div className="mb-6">
              <h3 className="text-xl font-black text-black mb-3">QUICK PRESETS:</h3>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => loadPreset(preset)}
                    className="p-2 bg-purple-100 hover:bg-purple-200 border-2 border-black rounded-lg font-bold text-black text-sm transition-colors"
                  >
                    {preset.top} / {preset.bottom}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate & Download */}
            <div className="space-y-3">
              <Button 
                variant="primary" 
                size="large" 
                className="w-full font-black"
                onClick={generateMeme}
                disabled={isGenerating}
              >
                {isGenerating ? '🔄 GENERATING...' : '🎨 GENERATE MEME'}
              </Button>
              
              <Button 
                variant="secondary" 
                size="large" 
                className="w-full font-black"
                onClick={downloadMeme}
              >
                📥 DOWNLOAD MEME
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black">
            <h2 className="text-3xl font-black text-black mb-6">PREVIEW 👀</h2>
            
            <div className="text-center">
              <canvas
                ref={canvasRef}
                className="max-w-full h-auto border-4 border-black rounded-xl"
                style={{ maxHeight: '400px' }}
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-black font-bold">
                Share your WOMP meme on social media! 🚀
              </p>
              <p className="text-gray-600 font-bold text-sm mt-2">
                Current: {blobVariations.find(b => b.id === selectedBlob)?.name}
              </p>
              <p className="text-gray-600 font-bold text-sm">
                Background: {backgrounds.find(bg => bg.id === selectedBackground)?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 