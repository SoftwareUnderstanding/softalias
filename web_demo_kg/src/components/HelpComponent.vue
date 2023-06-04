<template>
  <div class="container">
    <div class="description">
      <div class="header">
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <h1 class="title">Help</h1>
      </div>
      <p>Welcome to the Help section of our software. Here you will find information and resources to help you use the software effectively.</p>
      <h2>Using the Software</h2>
      <p>This website allows you to search for software and obtain related information about that software. The webpage is divided into three main sections:</p>
      <ol>
        <li>The first section is the search field. Here you can type the name of the software you want to search for. As you type, the page will display a dropdown list with software suggestions that match what you have typed.</li>
        <li>The second section displays the search results. Once you select a software from the dropdown list after typing the name of the software you want to search for, the page will load information related to that software.</li>
        <li>The third section displays additional information about the selected software. When you click the "Details" button in the search results section, the page displays a table containing additional information about the software, such as its version and a description.</li>
      </ol>
      <p>To use the webpage, follow these steps:</p>
      <ol>
        <li>Type the name of the software you want to search for in the search field. The page will display a dropdown list with software suggestions that match what you have typed.</li>
        <li>Select a software from the dropdown list after typing the name of the software you want to search for. The page will load information related to that software.</li>
        <li>If you want to get more information about the selected software, click the "Details" button in the search results section. The page will display a table containing additional information about the software, such as its version and a description.</li>
      </ol>
      <h2>Feedback</h2>
      <p>We value your feedback and would love to hear your thoughts on how we can improve our software. Please contact us with any suggestions or comments.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpComponent',
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 80%;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.title {
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #f6f8fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  margin-top: 40px;
}

p {
  font-size: 1rem;
  margin: 10px 0;
  line-height: 1.5;
}

ol {
  margin-left: 20px;
}

li {
  margin: 10px 0;
}

</style>
