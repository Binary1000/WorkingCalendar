<template>
  <div id="work_div">
    <a href="/"><h2 style="text-align: center; margin:20px auto;">每日工作量</h2></a>
    <div id="content">
      <form id="work" method="post" action="http://localhost:8000/work">
        <table class="table">
          <tr>
            <td style="width: 100px;">上午</td>
            <td><input class="form-control" type="text" name="morning"></td>
          </tr>
          <tr>
            <td>下午</td>
            <td><input class="form-control" type="text" name="afternoon"></td>
          </tr>
          <tr>
            <td>晚上</td>
            <td><input class="form-control" type="text" name="evening"></td>
          </tr>
          <tr>
            <td>工作量(h)</td>
            <td><input class="form-control" type="text" name="hworktime"></td>
          </tr>
          <tr>
            <td>单价</td>
            <td><input class="form-control" type="text" name="price"></td>
          </tr>
          <tr>
            <td>总结</td>
            <td><textarea class="form-control" name="summary"></textarea></td>
          </tr>
          <tr>
            <td colspan="2"><button class="form-control btn btn-success">提交</button></td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<style>
  #work_div {
    width: 600px;
    margin: 100px auto;
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: 5px 5px 20px #1312129c;
    border: 1px solid #00000045;
    background-color: #8475751a;
  }

  body {
    background: url(/static/img/logo.jpg);
  }

  input,
  textarea {
    background: transparent !important;
  }

  td {
    text-align: center;
    vertical-align: middle !important;
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    margin-top: 20px;
  }

  body {
    background-size: cover;
    overflow: hidden;
  }

  div#content {
    position: relative;
  }

  button.btn-success {
    background-color: #28a74500;
    border-color: #8ab89445;
  }

  td,
  input,
  textarea {
    border-color: #ffffff5c !important;
  }
</style>
