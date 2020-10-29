$(function () {
  $("#form-id").submit(function () {
    return false;
  });
  $("#carbTotal").html(sumColumn(2));
  $("#calTotal").html(sumColumn(3));

  $("#add").click(function () {
    var sel = document.getElementById("scripts");
    var opt = sel.options[sel.selectedIndex];
    var carbss = opt.getAttribute("carbs");
    var cals = opt.getAttribute("cal");
    var food = document.getElementById("food");
    food.innerHTML =
      food.innerHTML +
      `
      <tr>
      <th scope="row">${opt.text}</th>
      <td carbsValue="${carbss}">${carbss}</td>
      <td calsValue="${cals}">${cals}</td>
      <td><button class="btn btn-primary" onclick='delItem(event)'>Del</button></td>
    </tr>`;

    console.log(opt.value);
    console.log(opt.text);
    console.log(carbss);
  });
  $("#calculate").click(calculate);
});

function delItem(e) {
  var btn = e.target;
  var td = btn.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
  $("#carbTotal").html(0);
  $("#calTotal").html(0);
}

function calculate() {
  $("#carbTotal").html(sumColumn(2));
  $("#calTotal").html(sumColumn(3));
}
function sumColumn(index) {
  var total = 0;
  $("td:nth-child(" + index + ")").each(function () {
    total += parseInt($(this).text(), 10) || 0;
  });
  return total;
}
