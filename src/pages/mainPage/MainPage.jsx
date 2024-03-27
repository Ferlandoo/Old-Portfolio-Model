import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";

const FullPage = () => {

  return (
    <>
      <main className="portfolio container">
        <PageHeader title="Portfolio" />
          <div className="row">
            <ProjectList />
          </div>
        <Footer />
      </main>
    </>
  );
};

export default FullPage;
