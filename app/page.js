import Image from 'next/image'
import styles from './page.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen, faFile, faFolder
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tree}>
        <ul className={styles.ul}>
          <li className={styles.li}> Project
            <ul className={styles.ul}>
              {/* <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFolderOpen} /> .git <span className={styles.span}>- asdf</span>
                    <ul className={styles.ul}>
                      <li className={styles.li}> css
                        <ul className={styles.ul}>
                          <li className={styles.li}> CSS Files <span className={styles.span}>- asdcf</span>
                          </li>

                        </ul>
                      </li>
                      <li className={styles.li}> Folder close <span className={styles.span}>- asdf</span>
                      </li>
                      <li className={styles.li}> index.html</li>
                      <li className={styles.li}> favicon.ico</li>
                    </ul> 
                  </li> */}

              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFolderOpen} /> app <span className={styles.span}>- use folders to define routes, and the files inside these folders are used to define the UI.</span>
                <ul className={styles.ul}>
                  <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFolder} /> Components <span className={styles.span}>- This is different from the "Components" directory, where any file in pages is considered a route.</span></li>

                </ul>
              </li>



              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFolder} /> node_modules <span className={styles.span}>- provide a way to re-use code in your Node application.</span></li>
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFolder} /> public <span className={styles.span}>- Static assets to be served</span></li>
              {/* <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFolderOpen} /> src <span className={styles.span}>- Optional application source folder</span></li> */}
              {/* <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> .eslintrc <span className={styles.span}>- Next.js provides an integrated ESLint experience out of the box.</span></li> */}
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> .gitignore <span className={styles.span}>- to ensure that certain files not tracked by Git remain untracked.</span></li>
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> jsconfig <span className={styles.span}>- Next.js allows us to use this file to identify the root files and perform path mapping needed for absolute imports.</span></li>
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> next.config <span className={styles.span}>- Next.js can be configured through a next.config.js file in the root of your project directory.</span></li>
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> package <span className={styles.span}>- Project dependencies and scripts</span></li>
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> package-lock <span className={styles.span}>- ensures that the dependencies installed can not be modified.</span></li>
              <li className={styles.li}> <FontAwesomeIcon className={styles.faSize} icon={faFile} /> README <span className={styles.span}>- a guide that gives users a detailed description of a project you have worked on.</span></li>




            </ul>
          </li>
        </ul>
      </div>


    </main>
  )
}
