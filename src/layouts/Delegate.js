import "./Delegate.css"
import {useState} from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Delegate() {

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile]=useState(null);

  // pdf file error state
  const [pdfError, setPdfError]=useState('');

  // handle file onChange event
 

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [country, setCountry] = useState("Country");
  const [workingpaper, setworkingpaper] = useState("workingpaper");
  

  
  //const bc = BroadcastChannel('timer');

  //bc.onmessage = (e) => { console.log(e.seconds, e.minutes, e.hours, e.days, e.isRunning) };
  
  window.addEventListener('storage', () => {
    const seconds = localStorage.getItem('seconds');
    const minutes = localStorage.getItem('minutes');
    const hours = localStorage.getItem('hours');
    const days = localStorage.getItem('days');
    const isRunning = localStorage.getItem('isRunning');
    const country = localStorage.getItem('country');
    const workingpaper = localStorage.getItem('workingpaper');
   
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDays(days);
    setIsRunning(isRunning);
    setCountry(country);
    setworkingpaper(workingpaper);

  });

  const allowedFiles = ['application/pdf'];
  const handleFile = (e) =>{
    let selectedFile = e.target.files[0];
    // let selectedFile = workingpaper;
    console.log(workingpaper);
    console.log(selectedFile.type);
    if(selectedFile){
      if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend=(e)=>{
          setPdfError('');
          setPdfFile(e.target.result);
        }
        console.log(workingpaper);
      }
      else{
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    }
    else{
      console.log('please select a PDF');
    }
  }

  // const mystyle = {
  //   margin:"4px", "4px";
  //               padding:"4px";
  //               background-color: green;
  //               width: "500px";
  //               height: "110px";
  //               overflow-x: hidden;
  //               overflow-y: auto;
  //               text-align:justify;
  // };


  return (
    <div className="container">


      <div style={{textAlign: 'center'}} >
        <h1>{country}</h1>
        
        <div style={{fontSize: '100px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        
      </div>

      {/* Upload PDF */}
      <form>

        <label><h5>Upload PDF</h5></label>
        <br></br>

        <input type='file' className="form-control"
        onChange={handleFile}></input>

        {/* we will display error message in case user select some file
        other than pdf */}
        {pdfError&&<span className='text-danger'>{pdfError}</span>}

      </form>
      {/* <button type="button" className="buttonname">Hello</button> */}

      {/* View PDF */}
      <h5>View PDF</h5>
      
      <div className="main-content">

        {/* render this if we have a pdf file */}
        {pdfFile&&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile&&<>No file is selected yet</>}

      </div>
      
    </div>
  );
}

export default Delegate;