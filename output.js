//Fri Jun 28 2024 08:53:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "网易有道词典";
VALY = ["wyydcdck"];
VER = "1.0.0";
CK = "";
LOGS = 0;
usid = 0;
Notify = 0;
nowhour = Math.round(new Date().getHours()).toString();
const 哇哈哈_0x2ff231 = require("fs"),
  {
    v4: 哇哈哈_0x393375
  } = require("uuid");
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class 哇哈哈_0x449639 {
  constructor(_0xf88611) {
    this.cookie = _0xf88611;
    this.imei = $.udid(1);
    this.oaid = $.SJS(16, 1);
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x4c8744 = $.time(13),
      _0x321545 = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&keyfrom=mdict.10.0.10.android&mid=13&model=2211133C&mysticTime=" + _0x4c8744 + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x1d5d24 = {
        Cookie: this.cookie
      },
      _0x180a51 = await $.task("get", "https://dict.youdao.com/dictusertask/withdraw/account?pointParam=dev_name,previewEnvTest,product,appVersion,keyfrom,mid,screen,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&sign=" + _0x321545 + "&previewEnvTest=0&keyid=dict-usertask-key&mysticTime=" + _0x4c8744 + "&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x1d5d24);
    _0x180a51.code == 0 ? (this.name = this.f + _0x180a51.data.wechatName, console.log("【" + this.name + "】登陆成功，当前现金余额" + _0x180a51.data.amount + "元"), this.message += "【" + this.name + "】登陆成功，当前现金余额" + _0x180a51.data.amount + "元", _0x180a51.data.amount >= 1 && (await this.tixian()), this.logs = true) : this.logs = false;
  }
  async ["cheeseinfo"]() {
    let _0xf01a5f = $.time(13),
      _0x37a9fe = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&keyfrom=mdict.10.0.10.android&mid=13&model=2211133C&mysticTime=" + _0xf01a5f + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x25f1c6 = {
        Cookie: this.cookie
      },
      _0x55dcc8 = await $.task("get", "https://dict.youdao.com/dictusertask/user/info?pointParam=dev_name,previewEnvTest,product,appVersion,keyfrom,mid,screen,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&sign=" + _0x37a9fe + "&previewEnvTest=0&keyid=dict-usertask-key&mysticTime=" + _0xf01a5f + "&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x25f1c6);
    _0x55dcc8.code == 0 && console.log("【" + this.name + "】当前cheese余额:" + _0x55dcc8.data.userInfo.cheeseGold + "个");
  }
  async ["signlist"]() {
    let _0x292336 = $.time(13),
      _0x12aa54 = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&keyfrom=mdict.10.0.10.android&mid=13&model=2211133C&mysticTime=" + _0x292336 + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x3af69a = {
        Cookie: this.cookie
      },
      _0x214c59 = await $.task("get", "https://dict.youdao.com/dictusertask/cheese/collectCoins?pointParam=dev_name,previewEnvTest,product,appVersion,keyfrom,mid,screen,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&sign=" + _0x12aa54 + "&previewEnvTest=0&keyid=dict-usertask-key&mysticTime=" + _0x292336 + "&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x3af69a);
    if (_0x214c59.code == 0) {
      for (let _0x397f9d of _0x214c59.data.collectCoins) {
        if (_0x397f9d.status == 1) {
          await this.signin(_0x397f9d.missionId);
        }
      }
      if (_0x214c59.data.redEnvelopeVO.isShow == true) {
        await this.packageinfo();
      }
    }
  }
  async ["signin"](_0x474ee9) {
    let _0x1d45ba = $.time(13),
      _0x3b71c5 = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&keyfrom=mdict.10.0.10.android&mid=13&missionId=" + _0x474ee9 + "&model=2211133C&mysticTime=" + _0x1d45ba + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x52125a = {
        Cookie: this.cookie
      },
      _0x181fe = await $.task("get", "https://dict.youdao.com/dictusertask/cheese/collect?pointParam=dev_name,previewEnvTest,product,appVersion,missionId,keyfrom,mid,screen,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&previewEnvTest=0&missionId=" + _0x474ee9 + "&sign=" + _0x3b71c5 + "&keyid=dict-usertask-key&mysticTime=" + _0x1d45ba + "&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x52125a);
    _0x181fe.code == 0 && console.log("【" + this.name + "】签到成功，当前签到：" + (_0x181fe.data.signNum + 1) + "天");
  }
  async ["getredpackage"]() {
    let _0x508c55 = $.time(13),
      _0x5816ef = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&isFinished=1&keyfrom=mdict.10.0.10.android&mid=13&model=2211133C&mysticTime=" + _0x508c55 + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x1990fa = {
        Cookie: this.cookie
      },
      _0x31c045 = await $.task("get", "https://dict.youdao.com/dictusertask/withdraw/redpacket?pointParam=dev_name,previewEnvTest,product,appVersion,keyfrom,mid,screen,mysticTime,isFinished,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&sign=" + _0x5816ef + "&previewEnvTest=0&keyid=dict-usertask-key&mysticTime=" + _0x508c55 + "&isFinished=1&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x1990fa);
    _0x31c045.code == 0 && (console.log("【" + this.name + "】本次开红包成功,今天已开" + _0x31c045.data.getRedPacketTimes + "次，共开出:" + _0x31c045.data.todayRedPackets + "元"), _0x31c045.data.getRedPacketTimes < 4 && (await $.wait(50000, 65000), await this.getredpackage()));
  }
  async ["packageinfo"]() {
    let _0x116b16 = $.time(13),
      _0x5eee4a = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&keyfrom=mdict.10.0.10.android&mid=13&model=2211133C&mysticTime=" + _0x116b16 + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x1ea887 = {
        Cookie: this.cookie
      },
      _0x165518 = await $.task("get", "https://dict.youdao.com/dictusertask/withdraw/redpacket?pointParam=dev_name,previewEnvTest,product,appVersion,keyfrom,mid,screen,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei,oaid&sign=" + _0x5eee4a + "&previewEnvTest=0&keyid=dict-usertask-key&mysticTime=" + _0x116b16 + "&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x1ea887);
    if (_0x165518.code == 0 && _0x165518.data.getRedPacketTimes < 4) {
      await this.getredpackage();
    } else {
      if (_0x165518.code == 0 && _0x165518.data.getRedPacketTimes == 4) {
        console.log("【" + this.name + "】今日开红包任务已完成，请勿重复运行脚本");
      }
    }
  }
  async ["tixian"]() {
    let _0x2a1b5e = $.time(13),
      _0x235e15 = $.MD5Encrypt(0, "abtest=1&appVersion=10.0.10&client=android&dev_name=Xiaomi 13&imei=" + this.imei + "&keyfrom=mdict.10.0.10.android&mid=13&model=2211133C&money=1&mysticTime=" + _0x2a1b5e + "&network=wifi&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%3D&oaid=" + this.oaid + "&previewEnvTest=0&product=mdict&screen=1080x2400&vendor=xiaomi&yduuid=" + this.oaid + "&key=ttfMFaa7tiPyAc3DanKeIMzEejm"),
      _0x493c3a = {
        Cookie: this.cookie
      },
      _0x5b5023 = $.time(13),
      _0x138540 = $.getNextDayTimestamp();
    if (_0x138540 != "请在规定时间段内提现") {
      let _0x32072a = _0x138540 - _0x5b5023 - DS;
      if (_0x5b5023 <= _0x138540) {
        console.log("【" + this.name + "】提现时间未到，等待" + _0x32072a / 1000 + "秒后开始疯狂抢钱...");
        await $.wait(_0x32072a);
        let _0x78599a = await $.task("get", "https://dict.youdao.com/dictusertask/withdraw/execute?pointParam=dev_name,previewEnvTest,product,appVersion,keyfrom,mid,screen,mysticTime,network,abtest,yduuid,money,vendor,client,imei,model,newImei,oaid&sign=" + _0x235e15 + "&previewEnvTest=0&keyid=dict-usertask-key&mysticTime=" + _0x2a1b5e + "&money=1&dev_name=Xiaomi+13&product=mdict&appVersion=10.0.10&keyfrom=mdict.10.0.10.android&mid=13&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=" + this.oaid + "&vendor=xiaomi&client=android&imei=" + this.imei + "&model=2211133C&newImei=CQkxMmQ1MTc3MzVlM2Y5MWZhCXVua25vd24%253D&oaid=" + this.oaid, _0x493c3a);
        _0x78599a.code == 0 ? (console.log("【" + this.name + "】提现1元成功,当前时间:" + $.CurrentTime()), this.message += "【" + this.name + "】提现1元成功,当前时间:" + $.CurrentTime()) : console.log("【" + this.name + "】提现失败，原因:" + _0x78599a.msg + ",当前时间:" + $.CurrentTime());
      } else {
        if (_0x5b5023 > _0x138540) {
          console.log("【" + this.name + "】错过了提现时间，下次再来吧！");
        }
      }
    } else {
      console.log("【" + this.name + "】+" + _0x138540);
    }
  }
}
$ = 哇哈哈_0xd29d8b();
!(async () => {
  let _0x141bfc = await $.task("get", "http://" + DCFHOST + "/download?DCFKEY=" + dcfkey + "&JSMANE=wyydcd&VER=" + VER, {});
  if (_0x141bfc.code == 0) {
    console.log("【" + NAME + "】当前版本号：V" + VER + ",正在更新脚本，请稍等......");
    const _0x1d4e1c = require("fs").promises,
      _0x37c2b7 = process.argv[1];
    await _0x1d4e1c.writeFile(_0x37c2b7, _0x141bfc.scriptData);
    console.log("脚本更新完成，请重新运行脚本");
  } else {
    if (_0x141bfc.code == 1) {
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
      let _0x2e8da3 = await $.getkami(),
        _0x4e9ec6 = await $.readUUID();
      if (_0x2e8da3.dcfkey) {
        _0x2e8da3.Notify != "" && (console.log(_0x2e8da3.Notify), NOTIFY = _0x2e8da3.Notify);
        TSdata = $.time(13);
        if (_0x2e8da3.MAC == null) {
          console.log("请提交正确的MAC地址后再运行脚本！");
          return;
        } else {
          if (_0x2e8da3.MAC != null) {
            if (_0x2e8da3.MAC != _0x4e9ec6) {
              let _0x3e8ef6 = require("path"),
                _0x99ce41 = _0x3e8ef6.basename(__filename);
              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x99ce41 + "]");
              return;
            }
          }
        }
        if (_0x2e8da3.Delete == 1) {
          let _0x11b12d = require("path"),
            _0xcacbdb = _0x11b12d.basename(__filename);
          console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0xcacbdb + "]");
          哇哈哈_0x2ff231.unlink(_0xcacbdb, _0x148d7d => {});
          return;
        }
        if (TSdata <= _0x2e8da3.Data) {
          console.log("尊贵的" + _0x2e8da3.UserName + "小主,您的卡密有效期到：" + _0x2e8da3.DataTime);
        } else {
          let _0x361fa4 = require("path"),
            _0x59e14 = _0x361fa4.basename(__filename);
          console.log("卡密已过期，停止运行文件[" + _0x59e14 + "]");
          return;
        }
        await $.ExamineCookie();
        if ($.cookie_list.length < _0x2e8da3.xianjin) {
          await $.Multithreading("login");
          let _0x183c81 = $.cookie_list.filter(_0x1a924f => _0x1a924f.logs == true);
          if (_0x183c81.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("cheeseinfo");
            await $.Multithreading("signlist");
          }
        } else {
          console.log("账号数量超过限制，请减少账号数量后重试！");
        }
      } else {
        if (_0x2e8da3.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x20b021 = require("path"),
            _0x4f0126 = _0x20b021.basename(__filename);
          console.log("无效卡密，停止运行文件[" + _0x4f0126 + "]");
          return;
        }
      }
    } else {
      console.log("脚本更新失败，不进行覆盖操作，请稍后重试！");
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
      let _0x45fcda = await $.getkami(),
        _0x35fe93 = await $.readUUID();
      if (_0x45fcda.dcfkey) {
        _0x45fcda.Notify != "" && (console.log(_0x45fcda.Notify), NOTIFY = _0x45fcda.Notify);
        TSdata = $.time(13);
        if (_0x45fcda.MAC == null) {
          console.log("请提交正确的MAC地址后再运行脚本！");
          return;
        } else {
          if (_0x45fcda.MAC != null) {
            if (_0x45fcda.MAC != _0x35fe93) {
              let _0xc3d10 = require("path"),
                _0x202adb = _0xc3d10.basename(__filename);
              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x202adb + "]");
              return;
            }
          }
        }
        if (_0x45fcda.Delete == 1) {
          let _0x458c4f = require("path"),
            _0x2c6113 = _0x458c4f.basename(__filename);
          console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x2c6113 + "]");
          哇哈哈_0x2ff231.unlink(_0x2c6113, _0x43d711 => {});
          return;
        }
        if (TSdata <= _0x45fcda.Data) {
          console.log("尊贵的" + _0x45fcda.UserName + "小主,您的卡密有效期到：" + _0x45fcda.DataTime);
        } else {
          let _0x3af12e = require("path"),
            _0x5de94b = _0x3af12e.basename(__filename);
          console.log("卡密已过期，停止运行文件[" + _0x5de94b + "]");
          return;
        }
        await $.ExamineCookie();
        if ($.cookie_list.length < _0x45fcda.xianjin) {
          await $.Multithreading("login");
          let _0xe67114 = $.cookie_list.filter(_0x11565f => _0x11565f.logs == true);
          if (_0xe67114.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("cheeseinfo");
            await $.Multithreading("signlist");
          }
        } else {
          console.log("账号数量超过限制，请减少账号数量后重试！");
        }
      } else {
        if (_0x45fcda.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x4bcf00 = require("path"),
            _0x4ab11c = _0x4bcf00.basename(__filename);
          console.log("无效卡密，停止运行文件[" + _0x4ab11c + "]");
          return;
        }
      }
    }
  }
  let _0x13d4ae = [];
  for (let _0x309d1b of $.cookie_list) {
    if (_0x309d1b.message) {
      _0x13d4ae.push(_0x309d1b.message);
    }
  }
  if (_0x13d4ae.length > 0) {
    await $.SendMsg(_0x13d4ae.join("\n"));
  }
})().catch(_0x44aaa9 => {
  console.log(_0x44aaa9);
}).finally(() => {});
function 哇哈哈_0xd29d8b() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x118650, _0x1859c0, _0x2d4c49) {
      let _0x4d381e = [];
      !_0x2d4c49 && (_0x2d4c49 = 1);
      while (_0x2d4c49--) {
        for (let _0x36d58f of $.cookie_list) {
          _0x4d381e.push(_0x36d58f[_0x118650](_0x1859c0));
        }
      }
      await Promise.allSettled(_0x4d381e);
    }
    ["ExamineCookie"]() {
      let _0x49b1f6 = process.env[VALY] || CK,
        _0x2ca714 = 0;
      if (_0x49b1f6) {
        for (let _0xd14c10 of _0x49b1f6.split("\n").filter(_0x571788 => !!_0x571788)) {
          $.cookie_list.push(new 哇哈哈_0x449639(_0xd14c10));
        }
        _0x2ca714 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x2ca714 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x2efa0c, _0x5c2476, _0x10ef17, _0x50cda6, _0x5bfac8) {
      if (_0x2efa0c == "delete") {
        _0x2efa0c = _0x2efa0c.toUpperCase();
      } else {
        _0x2efa0c = _0x2efa0c;
      }
      if (_0x2efa0c == "post") {
        delete _0x10ef17["content-type"];
        delete _0x10ef17["Content-type"];
        delete _0x10ef17["content-Type"];
        if ($.safeGet(_0x50cda6)) {
          _0x10ef17["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x10ef17["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x50cda6 && (_0x10ef17["Content-Length"] = $.lengthInUtf8Bytes(_0x50cda6));
      }
      if (_0x2efa0c == "get") {
        delete _0x10ef17["content-type"];
        delete _0x10ef17["Content-type"];
        delete _0x10ef17["content-Type"];
        delete _0x10ef17["Content-Length"];
      }
      _0x10ef17.Host = _0x5c2476.replace("//", "/").split("/")[1];
      return new Promise(async _0x481262 => {
        if (_0x2efa0c.indexOf("T") < 0) {
          var _0x576f36 = {
            url: _0x5c2476,
            headers: _0x10ef17,
            body: _0x50cda6,
            proxy: "http://" + _0x5bfac8
          };
        } else {
          var _0x576f36 = {
            url: _0x5c2476,
            headers: _0x10ef17,
            form: JSON.parse(_0x50cda6),
            proxy: "http://" + _0x5bfac8
          };
        }
        !_0x5bfac8 && delete _0x576f36.proxy;
        this.request[_0x2efa0c.toLowerCase()](_0x576f36, (_0x48862e, _0x184a75, _0x52601a) => {
          try {
            _0x52601a && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x576f36), console.log("================ 返回 ================"), $.safeGet(_0x52601a) ? console.log(JSON.parse(_0x52601a)) : console.log(_0x52601a));
          } catch (_0x130d4b) {
            console.log(_0x130d4b, _0x5c2476 + "\n" + _0x10ef17);
          } finally {
            let _0x5e073e = "";
            if (!_0x48862e) {
              if ($.safeGet(_0x52601a)) {
                _0x5e073e = JSON.parse(_0x52601a);
              } else {
                _0x52601a.indexOf("/") != -1 && _0x52601a.indexOf("+") != -1 ? _0x5e073e = _0x52601a : _0x5e073e = _0x52601a;
              }
            } else {
              _0x5e073e = _0x5c2476 + "   API请求失败，请检查网络重试\n" + _0x48862e;
            }
            return _0x481262(_0x5e073e);
          }
        });
      });
    }
    async ["readUUID"]() {
      const _0x74e1fc = "uuid.txt";
      await $.generateUUID(_0x74e1fc);
      try {
        const _0x5f2c13 = 哇哈哈_0x2ff231.readFileSync(_0x74e1fc, "utf8"),
          _0x4cdd2c = _0x5f2c13.trim();
        return _0x4cdd2c;
      } catch (_0x1260c6) {
        return null;
      }
    }
    ["generateUUID"](_0x15abae) {
      if (哇哈哈_0x2ff231.existsSync(_0x15abae)) {
        return;
      }
      const _0x4d02b9 = 哇哈哈_0x393375();
      哇哈哈_0x2ff231.writeFile(_0x15abae, _0x4d02b9, "utf8", _0x3ab43b => {
        if (_0x3ab43b) {
          console.error("写入文件出错: " + _0x3ab43b.message);
          return;
        }
      });
    }
    async ["getkami"]() {
      let _0x36df38 = await $.readUUID();
      await $.getCurrentIP();
      await $.getIPCITY();
      let _0xe674f8 = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x36df38 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0xe674f8;
    }
    async ["getIPCITY"]() {
      let _0x7a8c8d = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0x121156 = _0x7a8c8d.regionName + _0x7a8c8d.city;
      IPCITY = encodeURIComponent(_0x121156);
    }
    async ["getCurrentIP"]() {
      let _0x3d62d0 = await $.task("get", "https://httpbin.org/ip", {});
      IP = _0x3d62d0.origin;
    }
    async ["SendMsg"](_0x30f855) {
      if (!_0x30f855) {
        return;
      }
      if (Notify == 1) {
        var _0x596d77 = require("./sendNotify");
        await _0x596d77.sendNotify(NAME, NOTIFY + "\n\n" + _0x30f855);
      }
    }
    ["udid"](_0x1a9a59) {
      if (!("Fwept" !== "Fwept")) {
        function _0x349c64() {
          return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
        }
        let _0xd4c686 = _0x349c64() + _0x349c64() + "-" + _0x349c64() + "-" + _0x349c64() + "-" + _0x349c64() + "-" + _0x349c64() + _0x349c64() + _0x349c64();
        return _0x1a9a59 == 0 ? _0xd4c686.toUpperCase() : _0xd4c686.toLowerCase();
      }
    }
    ["SJS"](_0x561f28, _0x10febb) {
      if (_0x10febb == 0) {
        let _0x3b46ab = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm01234567890123456789",
          _0x45805a = _0x3b46ab.length,
          _0x4d48de = "";
        for (let _0x277418 = 0; _0x277418 < _0x561f28; _0x277418++) {
          _0x4d48de += _0x3b46ab.charAt(Math.floor(Math.random() * _0x45805a));
        }
        return _0x4d48de;
      } else {
        if (_0x10febb == 1) {
          let _0x439fc8 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x38ed23 = _0x439fc8.length,
            _0x5348e7 = "";
          for (let _0x148158 = 0; _0x148158 < _0x561f28; _0x148158++) {
            _0x5348e7 += _0x439fc8.charAt(Math.floor(Math.random() * _0x38ed23));
          }
          return _0x5348e7;
        } else {
          let _0x29de80 = "0123456789",
            _0xbae7a6 = _0x29de80.length,
            _0x4d85c1 = "";
          for (let _0x4cb1a1 = 0; _0x4cb1a1 < _0x561f28; _0x4cb1a1++) {
            _0x4d85c1 += _0x29de80.charAt(Math.floor(Math.random() * _0xbae7a6));
          }
          return _0x4d85c1;
        }
      }
    }
    ["CurrentTime"]() {
      const _0x1c1bfa = new Date(),
        _0x963923 = String(_0x1c1bfa.getHours()).padStart(2, "0"),
        _0x457add = String(_0x1c1bfa.getMinutes()).padStart(2, "0"),
        _0x3198e5 = String(_0x1c1bfa.getSeconds()).padStart(2, "0"),
        _0x371994 = String(_0x1c1bfa.getMilliseconds()).padStart(3, "0");
      let _0x58c3fe = _0x963923 + ":" + _0x457add + ":" + _0x3198e5 + "." + _0x371994;
      return _0x58c3fe;
    }
    ["getNextDayTimestamp"]() {
      const _0x34d9a1 = new Date();
      if (nowhour == 23) {
        _0x34d9a1.setDate(_0x34d9a1.getDate() + 1);
        _0x34d9a1.setHours(0, 0, 0, 0);
        return _0x34d9a1.getTime();
      } else {
        if (nowhour == 0) {
          return _0x34d9a1.setDate(_0x34d9a1.getDate()), _0x34d9a1.setHours(0, 0, 0, 0), _0x34d9a1.getTime();
        } else {
          let _0x48aa57 = "请在规定时间段内提现";
          return _0x48aa57;
        }
      }
    }
    ["lengthInUtf8Bytes"](_0x487cf4) {
      let _0x226514 = encodeURIComponent(_0x487cf4).match(/%[89ABab]/g);
      return _0x487cf4.length + (_0x226514 ? _0x226514.length : 0);
    }
    ["randomArr"](_0x43ab3c) {
      return _0x43ab3c[parseInt(Math.random() * _0x43ab3c.length, 10)];
    }
    ["wait"](_0x12bb37) {
      return new Promise(_0x4aa8bd => setTimeout(_0x4aa8bd, _0x12bb37));
    }
    ["time"](_0x43362e) {
      if (_0x43362e == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["timenow"]() {
      const _0x2e1255 = new Date(),
        _0xe929f = _0x2e1255.getFullYear(),
        _0x3f8c59 = String(_0x2e1255.getMonth() + 1).padStart(2, "0"),
        _0x2dac6c = String(_0x2e1255.getDate()).padStart(2, "0"),
        _0x324f32 = _0xe929f + "-" + _0x3f8c59 + "-" + _0x2dac6c;
      return _0x324f32;
    }
    ["safeGet"](_0x50aabe) {
      try {
        if (typeof JSON.parse(_0x50aabe) == "object") {
          return true;
        }
      } catch (_0x13db53) {
        return false;
      }
    }
    RT(_0x5ae869, _0x77198b) {
      return Math.round(Math.random() * (_0x77198b - _0x5ae869) + _0x5ae869);
    }
    ["SHA256withRSA"](_0x5e0fb0, _0x123de4) {
      const _0x45b1e0 = new rs.KJUR.crypto.Signature({
        alg: "SHA256withRSA"
      });
      _0x45b1e0.init(_0x5e0fb0);
      _0x45b1e0.updateString(_0x123de4);
      const _0xc3d60c = _0x45b1e0.sign(),
        _0x41a816 = rs.hextob64u(_0xc3d60c);
      return _0x41a816;
    }
    ["MD5Encrypt"](_0x3006ca, _0x4da7a8) {
      if (_0x3006ca == 0) {
        return this.CryptoJS.MD5(_0x4da7a8).toString().toLowerCase();
      } else {
        if (_0x3006ca == 1) {
          return this.CryptoJS.MD5(_0x4da7a8).toString().toUpperCase();
        } else {
          if (_0x3006ca == 2) {
            return this.CryptoJS.MD5(_0x4da7a8).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x3006ca == 3) {
              return this.CryptoJS.MD5(_0x4da7a8).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
  }();
}