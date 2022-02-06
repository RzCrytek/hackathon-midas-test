import React from 'react';
import Layout from './Layout';

const ProjectTerms = () => {
  return (
    <Layout pageId="projectTerms">
      <div className="box">
        <div className="terms-content">
          <h5 className="h5 c-1">
            <b>Confidentiality document</b>
          </h5>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              semper interdum elit vitae eleifend. Phasellus ut elit
              condimentum, facilisis metus sed, condimentum tortor. Nulla ut
              sapien at nisl sollicitudin tempor in vitae purus. Mauris blandit
              finibus sapien, eget fringilla enim porttitor vel. Quisque cursus
              tortor in massa suscipit pellentesque. Cras vehicula nisl dui.
              Donec lobortis a nunc nec auctor. Nulla sit amet felis justo. Nunc
              aliquam ac ipsum vel pellentesque.
            </p>

            <p>
              Nam fringilla elit ac suscipit aliquet. Vivamus ornare metus et
              pharetra lacinia. Morbi rhoncus nunc nec nibh dapibus, eget auctor
              justo ullamcorper. Donec molestie tempus ante id rhoncus. Fusce
              ante sem, bibendum malesuada lorem nec, lacinia tincidunt erat.
              Nam elit urna, condimentum non diam a, luctus dictum est. Nam quis
              leo a metus hendrerit finibus. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Sed vitae tellus bibendum, suscipit sem
              non, interdum leo. Etiam sit amet est justo.
            </p>

            <p>
              Nunc quam risus, pellentesque sit amet sem id, molestie venenatis
              sapien. Integer pellentesque leo nec accumsan suscipit. Curabitur
              ultrices ac est vitae sagittis. Integer hendrerit ornare elit sed
              gravida. Pellentesque neque nunc, dictum quis dui non, consequat
              euismod augue. Sed commodo malesuada turpis non commodo. Maecenas
              sit amet est velit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>

            <p>
              Praesent hendrerit, nunc non pharetra sollicitudin, lorem elit
              mollis augue, aliquam fringilla diam dui nec massa. Phasellus in
              euismod mauris. Suspendisse lobortis mattis tellus in porta.
            </p>
          </div>

          <button className="btn" type="button">
            Accept
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTerms;
