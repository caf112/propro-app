import * as Results from "components/features/results/Index"
import { Header } from "components/layouts/Index";
import React, { useEffect, useState } from 'react'

const Result = () => {

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
        <Header />        
        <Results.CodeRunner htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        <Results.GameScore />
    </div>
  )
}


export default Result