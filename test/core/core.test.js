import Core from '../../src/core/core';
import {SessionOpenError} from "../../src/core/errors/sessionopen_error";
import {NoSessionError} from "../../src/core/errors/nosession_error";

test('should return error when starting session with session open', async () => {
    let c = new Core();

    await c.startSession();

    await expect(async () => await c.startSession()).rejects.toThrow(SessionOpenError);
});

test('should create a new session if previous one is closed', async () => {
    window.Leya = {};
    window.Leya.Events = {};
    window.Leya.Events.recordSession = jest.fn();

    let c = new Core();

    await c.startSession();
    await c.finishSession();

    expect(window.Leya.Events.recordSession).toHaveBeenCalled();

    await c.startSession();
});

test('should throw an error when finishing a session without having started one', async () => {
    let c = new Core();

    await expect(async () => await c.finishSession()).rejects.toThrow(NoSessionError);
});

test('should throw an error when setTags is called with no arguments', async () => {
    let c = new Core();
    await expect(async () => await c.setTags()).rejects.toThrow(Error);
});

test('should throw an error when setTags is called with non array argument', async () => {
    let c = new Core();
    await expect(async () => await c.setTags(1)).rejects.toThrow(Error);
});

test('should throw an error when setTags is called with odd sized array argument', async () => {
    let c = new Core();
    await expect(async () => await c.setTags([1, 2, 3])).rejects.toThrow(Error);
});

test('should throw an error when addTags is called with odd sized array argument', async () => {
    let c = new Core();
    await expect(async () => await c.addTags([1, 2, 3])).rejects.toThrow(Error);
});

test('should throw an error when addTags is called with non array argument', async () => {
    let c = new Core();
    await expect(async () => await c.addTags(1)).rejects.toThrow(Error);
});

test('should throw an error when addTags is called with no arguments', async () => {
    let c = new Core();
    await expect(async () => await c.addTags()).rejects.toThrow(Error);
});

test('should throw an error when addTags is called with array with invalid arguments', async () => {
    let c = new Core();
    await expect(async () => await c.addTags([1, function () {
    }])).rejects.toThrow(Error);
});

test('should throw an error when setTags is called with array with invalid arguments', async () => {
    let c = new Core();
    await expect(async () => await c.setTags([1, function () {
    }])).rejects.toThrow(Error);
});

test('should remove tag', async () => {
    let c = new Core();
    await c.addTags(["key", "value"]);

    await c.removeTags("key");

    let tags = await c.getTags();

    expect(tags.length).toBe(0);
});

test('should do nothing when tag key does not exist', async () => {
    let c = new Core();
    await c.addTags(["key", "value"]);

    await c.removeTags("key2");

    let tags = await c.getTags();

    expect(tags.length).toBe(2);
});

test('should update key if key exists', async () => {
    let c = new Core();
    await c.addTags(["key", "value"]);

    await c.addTags(["key", "value2"]);

    let tags = await c.getTags();

    expect(tags.length).toBe(2);
    expect(JSON.stringify(tags)).toBe(JSON.stringify(["key", "value2"]))
});

test('should set tags successfully and transform to lower case', async () => {
    let c = new Core();
    await c.setTags(["KEY", "VALUE"]);

    let tags = await c.getTags();

    expect(tags.length).toBe(2);
    expect(JSON.stringify(tags)).toBe(JSON.stringify(["key", "value"]))
});

test('should throw an error when removeTag is invoked without arguments', async () => {
    let c = new Core();

    await expect(async () => await c.removeTags()).rejects.toThrow(Error);
});