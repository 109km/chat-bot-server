var INTENTS = {
  'None': responseNone,
  '查考试时间': searchExamTime,
  '查报名价格': searchPrice,
  '帮助': responseHelp,
  '感谢': responseThanks
}

function processIntent(intentData) {
  let intent = intentData.topScoringIntent.intent;
  let entities = intentData.entities;
  var results = INTENTS[intent].call(null, intent, entities);
  return results;
}

// 查询考试时间的处理流程
function searchExamTime(intent, entities) {
  var province = entities[0].resolution.values[0];
  var city = entities[0].entity;
  return {
    code: 0,
    data: {
      intent: intent,
      city: city,
      province: province,
      time: '8月12号'
    }
  }
}

// 查询报名价格的流程
function searchPrice(intent, entities) {
  return {
    code: 0,
    data: {
      intent: intent,
      name: '普通班',
      price: 7980
    }
  }
}


// 回复 None
function responseNone(intent) {
  return {
    code: 0,
    data: {
      intent: intent
    }
  }
}

// 回复 帮助
function responseHelp(intent, entities) {
  return {
    code: 0,
    data: {
      intent: intent
    }
  }
}

// 回复 感谢
function responseThanks(intent) {
  return {
    code: 0,
    data: {
      intent: intent
    }
  }
}



module.exports = {
  processIntent: processIntent
}