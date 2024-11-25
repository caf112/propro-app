import * as GameContents from "components/features/game/Index"
import React, { useEffect, useState } from 'react'

const Preview = () => {

    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
  
    useEffect(() => {
      const storedHtmlCode = localStorage.getItem('htmlCode') || '';
      const storedCssCode = localStorage.getItem('cssCode') || '';
      const storedJsCode = localStorage.getItem('jsCode') || '';
      setHtmlCode(storedHtmlCode);
      setCssCode(storedCssCode);
      setJsCode(storedJsCode);
    }, []);

  return (
    <div>
      <GameContents.CodeRunner htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
    </div>
  )
}


export default Preview