import {ProgressBar} from 'react-loader-spinner'

/**
 * Loader component represents the Loader type rotating lines.
 */
export const Loader = () => {
    return <ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor = '#F4442E'
    barColor = '#ff5d51'
  />

  
}
