const arrayOfJsonsFiles = ['json112', 'json113', 'json114'];
const initialObject = {
  name: '',
  clicks: 0,
  lp_clicks: 0,
  lp_ctr_8053: 0,
  lp_ctr: 0,
  leads: 0,
  approved: 0, // нет
  hold: 0,  // нет
  rejected: 0, // нет
  cr: 0,
  epc: 0,
  cpc: 0,
  epl: 0, // нет
  cpl: 0,
  h_revenue: 0,
  revenue: 0,
  cost: 0,
  profit: 0,
  roi: 0,
  approve: 0, // нет
  optimal_bid: 0
};
const commonProperties = ['name', 'clicks', 'lp_clicks', 'lp_ctr_8053', 'lp_ctr', 'leads', 
'approved', 'hold', 'rejected', 'cr', 'epc', 'cpc', 'epl', 'cpl', 'h_revenue', 'revenue',
'cost', 'profit', 'roi', 'approve', 'optimal_bid'];

async function getDataFromJson(name) {
  try {
    const response = await fetch(`./json/${name}.txt`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function combineJsonFiles() {
  const arr = [];
    for (let i = 0; i < arrayOfJsonsFiles.length; i++) {
      arr.push(getDataFromJson(arrayOfJsonsFiles[i]));
    }
  return Promise.all(arr);
}

const data = combineJsonFiles().then(result => {
    const combinedArray = [];
    result.map(arr => {
      arr.map(item => combinedArray.push(item));
    });
    return combinedArray;
  }
);

const dataStructuring = () => {
  const newArray = [];
  data.then(response => {
    response.map(obj => {
      commonProperties.map(item => {
        initialObject[item] = obj[item];
      });
      // debugger;
      newArray.push({...initialObject});
    });
    return newArray;
  })
  .then(response => {
    const json = toJson(response);
    putToJson(json, 'json.txt', 'text/plain');
  });
};

const toJson = (arr) => {
  return JSON.stringify(arr);
};

putToJson = (content, fileName, contentType) => {
  const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
};

dataStructuring();