import { useState } from 'react';

function useFlip() {
    const [toggle, setToggle] = useState(true);

    function flipToggle() {
        setToggle(!toggle);
    }

    return [toggle, flipToggle]
}



export default useFlip;