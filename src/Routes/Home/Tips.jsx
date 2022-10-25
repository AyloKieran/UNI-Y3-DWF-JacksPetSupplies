import { useEffect, useState } from 'react';
import { TipsItem } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Tips() {

  const [loaded, setLoaded] = useState(false);
  const [tips, setTips] = useState([""]);

  useEffect(() => {
    if (!loaded) {
      fetch('/Tips.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTips(data);
          setLoaded(true);
        });
    }
  }, []);

  return (
    <div>
      {loaded &&
        <div className="group grid grid-cols-1 gap-4">
          {tips.map((tip, index) => (
            <TipsItem tip={tip} key={index} />
          )
          )}
        </div>
      }
      {!loaded &&
        <div className="flex justify-center">
          <FontAwesomeIcon icon={faSpinner} spin className="text-3xl text-gray-400 dark:text-gray-500" />
        </div>
      }
    </div>
  )
}

export default Tips