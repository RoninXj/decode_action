'''
new Env('灵魂触摸');
注册入口:https://www.bai6du.com/shareGameServlet/shareregister/linghunchumo/zouluzhuanqian.html?masterId=177094
抓account填入变量lhcm多号@隔开 (禁止改邀请不然关闭脚本)
'''
import bz2, base64
exec(bz2.decompress(base64.b64decode('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')))
