import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import chalk from 'chalk';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readUnusedFiles() {
  try {
    const unusedFilePath = path.join(process.cwd(), '.unused', 'unused-code.json');
    const content = await fs.readFile(unusedFilePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(chalk.red('错误: 无法读取 .unused/unused-code.json 文件'));
    console.error(chalk.red(`详细信息: ${error.message}`));
    process.exit(1);
  }
}

async function deleteFile(filePath) {
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(chalk.yellow(`警告: 文件不存在 - ${filePath}`));
      return false;
    }
    throw error;
  }
}

async function cleanUnusedFiles() {
  console.log(chalk.blue('开始清理未使用的文件...'));
  
  const unusedData = await readUnusedFiles();
  const { files = [] } = unusedData;
  
  if (files.length === 0) {
    console.log(chalk.yellow('没有发现需要清理的文件'));
    return;
  }

  console.log(chalk.blue(`发现 ${files.length} 个未使用的文件`));

  const results = {
    success: 0,
    failed: 0,
    notFound: 0
  };

  for (const filePath of files) {
    try {
      const normalizedPath = path.normalize(filePath);
      
      console.log(chalk.gray(`正在处理: ${normalizedPath}`));
      
      const deleted = await deleteFile(normalizedPath);
      
      if (deleted) {
        console.log(chalk.green(`✓ 已删除: ${normalizedPath}`));
        results.success++;
      } else {
        results.notFound++;
      }
    } catch (error) {
      console.error(chalk.red(`✗ 删除失败: ${filePath}`));
      console.error(chalk.red(`  错误: ${error.message}`));
      results.failed++;
    }
  }

  // 输出统计结果
  console.log('\n' + chalk.blue('清理完成:'));
  console.log(chalk.green(`✓ 成功删除: ${results.success} 个文件`));
  console.log(chalk.yellow(`⚠ 未找到: ${results.notFound} 个文件`));
  console.log(chalk.red(`✗ 删除失败: ${results.failed} 个文件`));
}

// 执行清理
cleanUnusedFiles().catch(error => {
  console.error(chalk.red('执行过程中发生错误:'));
  console.error(chalk.red(error.stack));
  process.exit(1);
});