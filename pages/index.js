import Head from 'next/head';
import styles from '../styles/Home.module.css';

let toggle = false;

const slideOutStyle =
  'transition: transform 1000ms; transform: translateY(-110%)';
const slideInStyle = 'transition: transform 1000ms; transform: translateY(0)';

function onButtonClick(ev) {
  // console.log(`${ev.target}`);
  const classes = document.getElementById('the_main').classList;
  classes.toggle(styles['slide-out']);
  classes.toggle(styles['slide-in']);
  // if (toggle) {
  //   mane.classList.add(styles['slide-out']);
  //   mane.classList.remove(styles['slide-in']);
  // } else {
  //   mane.classList.remove(styles['slide-out']);
  //   mane.classList.add(styles['slide-in']);
  // }
  // mane.style = toggle ? slideOutStyle : slideInStyle;
  toggle = !toggle;

  // const foo = Array.from(document.styleSheets);
  // foo.forEach((sheet, index) => {
  //   console.log(sheet.title + ' at ' + index);
  //   const rules = Array.from(sheet.cssRules);
  //   rules.forEach((rule) => {
  //     console.log(rule.cssText);
  //     if (rule.cssText.includes('.slide-in')) {
  //       console.log('Found the slide-in CSS rule!');
  //       rule.cssText = rule.cssText.replace(
  //         'translateY(0px)',
  //         'translateY(50%)'
  //       );
  //       console.log(rule.cssText);
  //     }
  //   });
  // });

  // const allCSS = [...document.styleSheets]
  //   .map((styleSheet) => {
  //     try {
  //       return [...styleSheet.cssRules].map((rule) => rule.cssText).join('\n');
  //     } catch (e) {
  //       console.log(
  //         'Access to stylesheet %s is denied. Ignoring...',
  //         styleSheet.href
  //       );
  //     }
  //   })
  //   .filter(Boolean)
  //   .join('\n');

  // console.log(allCSS);
}

export default function Home() {
  return (
    <div className={`${styles['container']}`}>
      <button className="btn" type="button" onClick={onButtonClick}>
        Hello
      </button>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main id="the_main" className={`${styles.main} ${styles['slide-out']}`}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
