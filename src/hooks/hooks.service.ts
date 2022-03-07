import { Injectable } from '@nestjs/common';
import * as request from 'request';
import * as moment from 'moment';

@Injectable()
export class HooksService {
  pushCommitMessage(query, body, res) {
    // 要推送的分支
    const pushBranchNames = ['master', 'prod', 'main'];

    // 获取机器人地址
    const webhook = query.webhook;

    // 获取当前分支的名字
    const refs = body.ref.split('/');
    const branchName = refs[refs.length - 1];

    if (pushBranchNames.includes(branchName)) {
      const projectName = body.project.name; //仓库名
      const commitMessages: any[] = body.commits;
      const enterStr = `\n`;
      const str = commitMessages
        .filter((item) => item.title.indexOf('Merge branch') == -1)
        .map((item) => {
          return `\n------分割线------\n提交作者：${
            item.author.name
          }\n📅提交时间：${moment(item.timestamp).format(
            'YYYY-MM-DD HH:mm:ss'
          )}\nℹ️提交信息：${item.title}${
            item.modified.length
              ? `\n✴️修改文件：\n${item.modified.join(enterStr)}`
              : ''
          }${
            item.added.length
              ? `\n✅添加文件：\n${item.added.join(enterStr)}`
              : ''
          }${
            item.removed.length
              ? `\n❎删除文件：\n${item.removed.join(enterStr)}`
              : ''
          }\n`;
        })
        .join('');
      const messages = `📦项目仓库：${projectName}-${branchName}\n${str}\n`;

      request(
        {
          url: webhook,
          method: 'POST',
          json: true,
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            msgtype: 'text',
            text: {
              content: messages
            }
          }
        },
        (error) => {
          console.log('这里是回调');
          if (error) {
            return res.send({ code: '888888', msg: '发送失败', error });
          }
          return res.send({ code: '000000', msg: '发送成功' });
        }
      );
    }
  }
}
